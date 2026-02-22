import type { Meta, StoryObj } from '@storybook/react-vite';
import { SelectionToolbar } from './selection-toolbar';
import { useState } from 'react';
import { Search, Twitter, MessageSquare, Plus } from 'lucide-react';

const meta: Meta<typeof SelectionToolbar> = {
    title: 'Components/SelectionToolbar',
    component: SelectionToolbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectionToolbar>;

const DemoContent = () => (
    <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '16px', background: 'white' }}>
        <h2 style={{ marginTop: 0, fontSize: '24px', fontWeight: 700 }}>Medium-Style Text Selection</h2>
        <p style={{ lineHeight: 1.6, color: '#4b5563' }}>
            Select any text in this area to see the floating toolbar appear. The toolbar automatically
            positions itself above the selection and includes common formatting options like bold,
            italic, and link, as well as utility actions like copy and share.
        </p>
        <p style={{ lineHeight: 1.6, color: '#4b5563', marginBottom: 0 }}>
            Try selecting text across multiple lines or near the edges of the viewport. The menu will
            automatically adjust its position to stay visible and accessible. This creates a seamless
            editing experience similar to popular writing platforms.
        </p>
    </div>
);

export const Default: Story = {
    render: () => (
        <div style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
                <SelectionToolbar>
                    <DemoContent />
                </SelectionToolbar>
            </div>
        </div>
    )
};

export const InfoTracking: Story = {
    render: () => {
        const [info, setInfo] = useState<any>(null);

        return (
            <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ maxWidth: '600px', width: '100%' }}>
                    <SelectionToolbar onSelectionChange={setInfo}>
                        <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '16px', background: 'white' }}>
                            <h2 style={{ marginTop: 0, fontSize: '24px', fontWeight: 700 }}>Selection Info Tracking</h2>
                            <p style={{ lineHeight: 1.6, color: '#4b5563' }}>
                                Select any text to see the toolbar and track selection information below. The component
                                provides callbacks to monitor selected text and implement custom behavior.
                            </p>
                            <p style={{ lineHeight: 1.6, color: '#4b5563' }}>
                                Try selecting different portions of text to see real-time updates of the word count and
                                character count. This demonstrates how you can track and respond to selection changes.
                            </p>
                        </div>
                    </SelectionToolbar>

                    {info && (
                        <div className="selection-info-card">
                            <h4 style={{ margin: '0 0 12px 0' }}>Selection Info</h4>
                            <div className="info-grid">
                                <div><span className="info-label">Words:</span> {info.wordCount}</div>
                                <div><span className="info-label">Characters:</span> {info.charCount}</div>
                            </div>
                            <div className="selected-text-preview">
                                <span className="info-label">Selected text:</span> "{info.text}"
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export const CustomActions: Story = {
    args: {
        actions: [
            { id: 'search', icon: <Search size={16} />, onClick: (d) => window.open(`https://www.google.com/search?q=${d.text}`) },
            { id: 'tweet', icon: <Twitter size={16} />, onClick: (d) => window.open(`https://twitter.com/intent/tweet?text=${d.text}`) },
            { id: 'comment', icon: <MessageSquare size={16} />, onClick: (d) => console.log('Comment on:', d.text) },
            { id: 'add', icon: <Plus size={16} />, onClick: (d) => console.log('Add to list:', d.text) }
        ]
    },
    render: (args) => (
        <div style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
                <SelectionToolbar {...args}>
                    <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '16px', background: 'white' }}>
                        <h2 style={{ marginTop: 0, fontSize: '24px', fontWeight: 700 }}>Custom Tool Actions</h2>
                        <p style={{ lineHeight: 1.6, color: '#4b5563' }}>
                            You can easily provide your own set of actions to the toolbar. In this case, we have added
                            Search, Twitter Share, Comment, and an Add button.
                        </p>
                    </div>
                </SelectionToolbar>
            </div>
        </div>
    )
};

export const DarkMode: Story = {
    render: () => (
        <div data-theme="dark" style={{ padding: '60px 20px', background: '#0a0a0a', minHeight: '400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
                <SelectionToolbar variant="ghost">
                    <div style={{ padding: '32px', border: '1px solid #1e293b', borderRadius: '16px', background: '#111827' }}>
                        <h2 style={{ marginTop: 0, fontSize: '24px', fontWeight: 700, color: 'white' }}>Dark Mode Selection</h2>
                        <p style={{ lineHeight: 1.6, color: '#94a3b8' }}>
                            The toolbar automatically adjusts its colors for dark themes. You can also use the "ghost"
                            variant for a modern glassmorphism look with backdrop blurring.
                        </p>
                    </div>
                </SelectionToolbar>
            </div>
        </div>
    )
};
