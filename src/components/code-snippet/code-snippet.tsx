import React, { useState, useMemo } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { CodeSnippetProps } from './code-snippet.types';
import './code-snippet.css';

/**
 * A lightweight regex-based syntax highlighter for common programming languages.
 * Designed to be zero-dependency and theme-aware.
 */
const highlightCode = (code: string, _language: string) => {
    let highlightedArea = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Basic common rules
    const rules = [
        // Comments
        { regex: /(\/\/.*|\/\*[\s\S]*?\*\/)/g, token: 'comment' },
        // Strings
        { regex: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, token: 'string' },
        // Keywords
        { regex: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|if|import|in|instanceof|new|null|return|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|await|async|let|static|interface|type|from|as)\b/g, token: 'keyword' },
        // Numbers
        { regex: /\b(\d+)\b/g, token: 'number' },
        // Functions
        { regex: /\b([a-zA-Z_$][a-zA-Z\d_$]*)(?=\s*\()/g, token: 'function' },
    ];

    rules.forEach(({ regex, token }) => {
        highlightedArea = highlightedArea.replace(regex, (match) => {
            return `<span class="token-${token}">${match}</span>`;
        });
    });

    return highlightedArea;
};

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
    code: initialCode,
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
    const [code, setCode] = useState(initialCode);
    const [copied, setCopied] = useState(false);

    // Sync state with prop if needed
    React.useEffect(() => {
        setCode(initialCode);
    }, [initialCode]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setCode(newValue);
        onCodeChange?.(newValue);
    };

    const lines = useMemo(() => code.split('\n'), [code]);
    const highlightedLines = useMemo(() =>
        lines.map(line => highlightCode(line, language)),
        [lines, language]);

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
                            {highlightedLines.map((line, i) => (
                                <code
                                    key={i}
                                    className="code-line"
                                    dangerouslySetInnerHTML={{ __html: line || ' ' }}
                                />
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
