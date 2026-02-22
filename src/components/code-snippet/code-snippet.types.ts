import type { ComponentPropsWithoutRef } from 'react';

export type CodeLanguage =
    | 'javascript'
    | 'typescript'
    | 'jsx'
    | 'tsx'
    | 'html'
    | 'css'
    | 'json'
    | 'python'
    | 'bash'
    | 'markdown';

export type LineSpacing = 'compact' | 'normal' | 'relaxed';

export interface CodeSnippetProps extends ComponentPropsWithoutRef<'div'> {
    /** The code string to display */
    code: string;
    /** The programming language for syntax highlighting */
    language?: CodeLanguage;
    /** Whether to show line numbers */
    showLineNumbers?: boolean;
    /** Vertical spacing between lines */
    lineSpacing?: LineSpacing;
    /** Whether to show a copy button */
    showCopyButton?: boolean;
    /** Optional title shown in the footer */
    footerTitle?: string;
    /** Optional title shown in the header */
    headerTitle?: string;
    /** Whether to wrap lines */
    wrapLines?: boolean;
    /** Custom theme colors */
    theme?: 'light' | 'dark' | 'system';
    /** Whether the code is read-only */
    readOnly?: boolean;
    /** Callback when the code changes */
    onCodeChange?: (code: string) => void;
}
