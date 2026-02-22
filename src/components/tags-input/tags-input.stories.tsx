import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    TagsInput,
    TagsInputLabel,
    TagsInputInput,
    TagsInputItem,
    TagsInputItemText,
    TagsInputItemDelete,
    TagsInputClear
} from './tags-input';
import { useState } from 'react';

const meta: Meta<typeof TagsInput> = {
    title: 'Components/TagsInput',
    component: TagsInput,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagsInput>;

export const Default: Story = {
    render: () => {
        const [tags, setTags] = useState(['Mango', 'UI', 'Kit']);
        return (
            <div style={{ maxWidth: '400px', padding: '20px' }}>
                <TagsInput value={tags} onValueChange={setTags}>
                    <TagsInputLabel>Frameworks</TagsInputLabel>
                    <div className="mango-tags-input-container">
                        {tags.map((tag, index) => (
                            <TagsInputItem key={tag + index} value={tag}>
                                <TagsInputItemText>{tag}</TagsInputItemText>
                                <TagsInputItemDelete onClick={() => setTags(tags.filter(t => t !== tag))} />
                            </TagsInputItem>
                        ))}
                        <TagsInputInput placeholder="Add framework..." />
                    </div>
                </TagsInput>
            </div>
        );
    }
};

export const Advanced: Story = {
    render: () => {
        const [tags, setTags] = useState(['shdf jsfs', 'dafsdf', 'sd', 'fs']);
        const max = 6;

        return (
            <div style={{ maxWidth: '400px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <TagsInput
                    value={tags}
                    onValueChange={setTags}
                    max={max}
                    onValidate={(val) => val.length >= 3 && val !== 'ollie'}
                >
                    <TagsInputLabel>Tricks</TagsInputLabel>
                    <div className="mango-tags-input-container">
                        {tags.map((tag, index) => (
                            <TagsInputItem key={tag + index} value={tag}>
                                <TagsInputItemText>{tag}</TagsInputItemText>
                                <TagsInputItemDelete onClick={() => setTags(tags.filter((_, i) => i !== index))} />
                            </TagsInputItem>
                        ))}
                        <TagsInputInput placeholder="Add trick..." />
                    </div>
                    <div className="mango-tags-input-description">
                        Add up to {max} tricks with at least 3 characters, excluding "ollie".
                    </div>
                    <TagsInputClear />
                </TagsInput>
            </div>
        );
    }
};

export const DarkMode: Story = {
    render: () => {
        const [tags, setTags] = useState(['React', 'Vite', 'Storybook']);
        return (
            <div data-theme="dark" style={{ background: '#0a0a0a', padding: '40px', minHeight: '300px' }}>
                <div style={{ maxWidth: '400px' }}>
                    <TagsInput value={tags} onValueChange={setTags}>
                        <TagsInputLabel>Tech Stack</TagsInputLabel>
                        <div className="mango-tags-input-container">
                            {tags.map((tag, index) => (
                                <TagsInputItem key={tag + index} value={tag}>
                                    <TagsInputItemText>{tag}</TagsInputItemText>
                                    <TagsInputItemDelete onClick={() => setTags(tags.filter((_, i) => i !== index))} />
                                </TagsInputItem>
                            ))}
                            <TagsInputInput placeholder="Add tech..." />
                        </div>
                        <TagsInputClear />
                    </TagsInput>
                </div>
            </div>
        );
    }
};


