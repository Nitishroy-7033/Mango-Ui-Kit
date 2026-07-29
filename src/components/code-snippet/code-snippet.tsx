import React, { useState, useMemo, useCallback } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { CodeSnippetProps } from './code-snippet.types';
import './code-snippet.css';

const escapeHtml = (str: string) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const TOKEN_RULES = [
    { regex: /(\/\/.*|\/\*[\s\S]*?\*\/)/g, className: 'token-comment' },
    { regex: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, className: 'token-string' },
    { regex: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|if|import|in|instanceof|new|null|return|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|await|async|let|static|interface|type|from|as)\b/g, className: 'token-keyword' },
    { regex: /\b(\d+)\b/g, className: 'token-number' },
    { regex: /\b([a-zA-Z_$][a-zA-Z\d_$]*)(?=\s*\()/g, className: 'token-function' },
];

interface TokenSpan { text: string; className?: string }

function tokenizeLine(line: string): TokenSpan[] {
    const escaped = escapeHtml(line);
    let spans: TokenSpan[] = [{ text: escaped }];

    for (const rule of TOKEN_RULES) {
        const nextSpans: TokenSpan[] = [];
        for (const span of spans) {
            if (span.className) {
                nextSpans.push(span);
                continue;
            }
            let lastIndex = 0;
            let match: RegExpExecArray | null;
            const regex = new RegExp(rule.regex.source, 'g');
            while ((match = regex.exec(span.text)) !== null) {
                if (match.index > lastIndex) {
                    nextSpans.push({ text: span.text.slice(lastIndex, match.index) });
                }
                nextSpans.push({ text: match[0], className: rule.className });
                lastIndex = regex.lastIndex;
            }
            if (lastIndex < span.text.length) {
                nextSpans.push({ text: span.text.slice(lastIndex) });
            }
        }
        spans = nextSpans;
    }
    return spans;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
    code: propCode,
    language = 'javascript',
    showLineNumbers = true,
    lineSpacing = 'normal',
    showCopyButton = true,
    footerTitle,
    headerTitle,
    wrapLines = false,
    readOnly = true,
    onCodeChange,
    className,
    style,
    ...props
}) => {
    const [code, setCode] = useState(propCode);
    const [copied, setCopied] = useState(false);

    const displayCode = readOnly ? propCode : code;

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(displayCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [displayCode]);

    const handleTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setCode(newValue);
        onCodeChange?.(newValue);
    }, [onCodeChange]);

    const lines = useMemo(() => displayCode.split('\n'), [displayCode]);
    const tokenizedLines = useMemo(() =>
        lines.map(line => tokenizeLine(line)),
        [lines]);

    return (
        <div
            className={cn(
                'mango-code-snippet',
                className,
                `spacing-${lineSpacing}`,
                !readOnly && 'is-editable'
            )}
            style={style}
            {...props}
        >
            {(headerTitle || showCopyButton) && (
                <div className="snippet-header">
                    <div className="header-left">
                        <span className="header-title">{headerTitle || language}</span>
                        {!readOnly && <span className="edit-badge">Editing</span>}
                    </div>
                    {showCopyButton && (
                        <button className="copy-button" onClick={handleCopy} title="Copy code">
                            {copied ? <Check size={14} /> : <Clipboard size={14} />}
                            <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                    )}
                </div>
            )}

            <div className={cn('snippet-body', wrapLines && 'is-wrapped')}>
                <div className="code-container">
                    {showLineNumbers && (
                        <div className="line-numbers">
                            {lines.map((_, i) => (
                                <span key={i} className="line-number">{i + 1}</span>
                            ))}
                        </div>
                    )}
                    <div className="code-editor-wrapper">
                        {!readOnly && (
                            <textarea
                                className="code-textarea"
                                value={code}
                                onChange={handleTextChange}
                                spellCheck={false}
                                autoComplete="off"
                                autoCapitalize="off"
                            />
                        )}
                        <pre className="code-content">
                            {tokenizedLines.map((tokens, i) => (
                                <code key={i} className="code-line">
                                    {tokens.length === 0 ? ' ' : tokens.map((token, j) =>
                                        token.className ? (
                                            <span key={j} className={token.className}>{token.text}</span>
                                        ) : (
                                            <React.Fragment key={j}>{token.text}</React.Fragment>
                                        )
                                    )}
                                </code>
                            ))}
                        </pre>
                    </div>
                </div>
            </div>

            {footerTitle && (
                <div className="snippet-footer">
                    <span className="footer-title">{footerTitle}</span>
                </div>
            )}
        </div>
    );
};

CodeSnippet.displayName = 'CodeSnippet';
