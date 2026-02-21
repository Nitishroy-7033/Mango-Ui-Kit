export interface ToggleProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
