export interface RatingProps {
    value?: number;
    max?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    size?: number;
    label?: string;
    count?: number;
    className?: string;
}
