import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import { Search, Mail, Lock, User, CreditCard, MapPin } from 'lucide-react';
import { OTPInput } from '../otp-input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

/* 1. Basic Text */
export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
        label: 'Username',
    },
};

export const ShortHandIcon: Story = {
    args: {
        label: 'Search User',
        placeholder: 'Search...',
        icon: <Search size={18} />,
    },
};

/* 2. Variants */
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '350px' }}>
            <Input variant="outlined" label="Outlined (Default)" placeholder="Outlined variant" />
            <Input variant="filled" label="Filled" placeholder="Filled variant" />
            <Input variant="underlined" label="Underlined" placeholder="Underlined variant" />
            <Input variant="borderless" label="Borderless" placeholder="Borderless variant" />
        </div>
    ),
};

/* 3. With Icons */
export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '350px' }}>
            <Input prefixIcon={<User size={18} />} placeholder="Username" />
            <Input suffixIcon={<Mail size={18} />} placeholder="Email address" />
            <Input prefixIcon={<MapPin size={18} />} suffixIcon={<Search size={18} />} placeholder="Search location..." />
        </div>
    ),
};

/* 4. Search with Button */
export const SearchInput: Story = {
    args: {
        placeholder: 'Search for products...',
        actionButton: {
            label: 'Search',
            icon: <Search size={18} />,
            onClick: () => alert('Searching...'),
        },
    },
};

/* 5. Password with Toggle */
export const PasswordField: Story = {
    args: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        prefixIcon: <Lock size={18} />,
        showPasswordToggle: true,
    },
};

/* 6. Email with Helper / Error */
export const ValidationStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '350px' }}>
            <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
                helperText="We'll never share your email."
            />
            <Input
                label="Username"
                placeholder="Enter username"
                error="Username is already taken"
            />
        </div>
    ),
};

/* 7. Phone with Country Selector */
export const PhoneInput: Story = {
    render: () => {
        const [country, setCountry] = useState('+91');
        const options = [
            { label: 'India', value: '+91', flag: '🇮🇳' },
            { label: 'United States', value: '+1', flag: '🇺🇸' },
            { label: 'United Kingdom', value: '+44', flag: '🇬🇧' },
            { label: 'Canada', value: '+1-CA', flag: '🇨🇦' },
            { label: 'Australia', value: '+61', flag: '🇦🇺' },
            { label: 'Germany', value: '+49', flag: '🇩🇪' },
            { label: 'France', value: '+33', flag: '🇫🇷' },
            { label: 'Japan', value: '+81', flag: '🇯🇵' },
            { label: 'Brazil', value: '+55', flag: '🇧🇷' },
        ];

        return (
            <div style={{ width: '400px' }}>
                <Input
                    type="tel"
                    label="Phone Number"
                    placeholder="8888 888 888"
                    countrySelector={{
                        value: country,
                        onChange: setCountry,
                        options: options,
                        showSearch: true,
                        dropdownWidth: '250px',
                        placeholder: 'Search country...'
                    }}
                />
            </div>
        );
    }
};

/* 8. URL with Prefix Addon */
export const UrlInput: Story = {
    args: {
        label: 'Website',
        addonBefore: 'https://',
        addonAfter: '.com',
        placeholder: 'google',
    },
};

/* 9. Loading State */
export const Loading: Story = {
    args: {
        label: 'Processing Data',
        placeholder: 'Wait a moment...',
        loading: true,
    },
};

/* 10. Sizes */
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '350px' }}>
            <Input size="sm" placeholder="Small input (sm)" prefixIcon={<Search size={14} />} />
            <Input size="md" placeholder="Medium input (md)" prefixIcon={<Search size={18} />} />
            <Input size="lg" placeholder="Large input (lg)" prefixIcon={<Search size={22} />} />
        </div>
    ),
};

/* 11. Credit Card (Custom suffix icon) */
export const PaymentInput: Story = {
    args: {
        label: 'Card Details',
        prefixIcon: <CreditCard size={18} />,
        placeholder: '0000 0000 0000 0000',
        suffixIcon: <div style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.5 }}>VISA</div>
    },
};

/* 12. Combined / Compact Style */
export const CompactStyle: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '450px' }}>
            {/* Search group - Using actionButton prop */}
            <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase' }}>Seamless Search Button</p>
                <Input
                    placeholder="Search items..."
                    prefixIcon={<Search size={18} />}
                    actionButton={{
                        label: 'Search',
                        onClick: () => alert('Search clicked')
                    }}
                />
            </div>

            {/* Domain group - Using addonBefore and addonAfter */}
            <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase' }}>Built-in Addons</p>
                <Input
                    placeholder="yourwebsite"
                    addonBefore="https://"
                    addonAfter=".com"
                />
            </div>

            {/* Combined - Using both for complex cases */}
            <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.5, marginBottom: '8px', textTransform: 'uppercase' }}>Complex Pairing</p>
                <Input
                    placeholder="username"
                    addonBefore={<User size={16} />}
                    actionButton={{
                        label: 'Check Availability',
                        variant: 'secondary',
                        onClick: () => { }
                    }}
                />
            </div>
        </div>
    )
};

export const Multiline: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '450px' }}>
            <Input
                multiline
                label="Long Description"
                placeholder="Can resize..."
                resize="both"
                showCount
                maxLength={500}
            />
            <Input
                multiline
                label="Message (Fixed Height)"
                placeholder="Resize disabled..."
                resize="none"
                rows={6}
                showCount
                countPosition="outside"
                maxLength={100}
            />
        </div>
    )
};

export const CharacterLimits: Story = {
    render: () => {
        const [charVal, setCharVal] = useState('');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '450px' }}>
                <Input
                    label="Username (Character Limit)"
                    placeholder="Type up to 20 characters..."
                    maxLength={20}
                    showCount
                    countPosition="inside"
                    value={charVal}
                    onChange={(e) => setCharVal(e.target.value)}
                />
                <Input
                    label="Bio (Outside Count)"
                    placeholder="Count is shown below..."
                    maxLength={100}
                    showCount
                    countPosition="outside"
                />
                <Input
                    label="Short Note (Word Limit)"
                    placeholder="Maximum 5 words..."
                    maxLength={5}
                    limitType="word"
                    showCount
                />
            </div>
        );
    }
};

export const OTPField: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <div style={{ width: '400px' }}>
                <OTPInput value={value} onChange={setValue} label="Temp OTP Check" />
            </div>
        );
    }
};
