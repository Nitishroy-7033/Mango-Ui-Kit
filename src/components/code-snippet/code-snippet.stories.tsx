import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CodeSnippet } from './code-snippet';

const meta: Meta<typeof CodeSnippet> = {
    title: 'Components/CodeSnippet',
    component: CodeSnippet,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CodeSnippet>;

const typescriptCode = `// Imports
import mongoose, { Schema } from 'untitled'

// Collection name
export const collection = 'Design'

// Schema
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, { timestamps: true })

// Model
export default untitled.model(collection, schema, collection)`;

const htmlCode = `<!DOCTYPE html>
<html>
<head>
    <title>Mango UI Kit</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>`;

export const TypeScript: Story = {
    args: {
        code: typescriptCode,
        language: 'typescript',
        headerTitle: 'schema.ts',
        footerTitle: 'Updated 2 days ago'
    }
};

export const HTML: Story = {
    args: {
        code: htmlCode,
        language: 'html',
        headerTitle: 'index.html',
        showLineNumbers: true
    }
};

export const Compact: Story = {
    args: {
        code: typescriptCode,
        language: 'typescript',
        lineSpacing: 'compact',
        headerTitle: 'Compact View'
    }
};

export const Relaxed: Story = {
    args: {
        code: typescriptCode,
        language: 'typescript',
        lineSpacing: 'relaxed',
        headerTitle: 'Relaxed View'
    }
};

export const NoLineNumbers: Story = {
    args: {
        code: typescriptCode,
        language: 'typescript',
        showLineNumbers: false,
        headerTitle: 'No Line Numbers'
    }
};

export const Editable: Story = {
    render: (args) => {
        const [code, setCode] = useState(args.code);
        return (
            <div style={{ maxWidth: '600px', padding: '20px' }}>
                <CodeSnippet
                    {...args}
                    code={code}
                    onCodeChange={setCode}
                    readOnly={false}
                    headerTitle="Editable Editor"
                />
            </div>
        );
    },
    args: {
        code: typescriptCode,
        language: 'typescript'
    }
};

export const DarkMode: Story = {
    render: (args) => (
        <div data-theme="dark" style={{ background: '#0a0a0a', padding: '40px' }}>
            <CodeSnippet {...args} />
        </div>
    ),
    args: {
        code: typescriptCode,
        language: 'typescript',
        headerTitle: 'dark-theme.ts'
    }
};
