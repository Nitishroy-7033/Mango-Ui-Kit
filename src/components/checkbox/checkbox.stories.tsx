import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { CheckboxGroup } from './checkbox-group';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: 'Remember me',
    },
};

export const Variants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Checkbox variant="solid" label="Solid (Default)" defaultChecked />
        <Checkbox variant="outlined" label="Outlined" defaultChecked />
        <Checkbox variant="soft" label="Soft" defaultChecked />
    </div>
);

export const Sizes = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Checkbox size="sm" label="Small size" defaultChecked />
        <Checkbox size="md" label="Medium size" defaultChecked />
        <Checkbox size="lg" label="Large size" defaultChecked />
    </div>
);

export const WithDescription: Story = {
    args: {
        label: 'Email Notifications',
        description: 'Get notified when someone mentions you or sends a message.',
        defaultChecked: true,
    },
};

export const Indeterminate = () => {
    const [checked, setChecked] = useState([true, false]);

    const allChecked = checked.every(Boolean);
    const isIndeterminate = checked.some(Boolean) && !allChecked;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Checkbox
                label="Select All"
                checked={allChecked}
                indeterminate={isIndeterminate}
                onChange={(c) => setChecked([c, c])}
            />
            <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Checkbox
                    label="Option 1"
                    checked={checked[0]}
                    onChange={(c) => setChecked([c, checked[1]])}
                />
                <Checkbox
                    label="Option 2"
                    checked={checked[1]}
                    onChange={(c) => setChecked([checked[0], c])}
                />
            </div>
        </div>
    );
};

export const States = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Checkbox label="Normal" />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled Checked" disabled defaultChecked />
        <Checkbox label="Error State" error="This field is required" />
    </div>
);

export const Group = () => {
    const [values, setValues] = useState<string[]>(['apple']);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <CheckboxGroup
                label="Favorite Fruits"
                description="Select all the fruits you like"
                value={values}
                onChange={setValues}
            >
                <Checkbox value="apple" label="Apple" />
                <Checkbox value="banana" label="Banana" description="Rich in potassium" />
                <Checkbox value="mango" label="Mango" description="The king of fruits!" />
            </CheckboxGroup>

            <div style={{ fontSize: '0.9rem' }}>
                Selected: <strong>{values.join(', ') || 'None'}</strong>
            </div>

            <CheckboxGroup
                label="Layout Options"
                orientation="horizontal"
                gap="24px"
                variant="outlined"
            >
                <Checkbox value="grid" label="Grid" />
                <Checkbox value="list" label="List" />
                <Checkbox value="compact" label="Compact" />
            </CheckboxGroup>
        </div>
    );
};
