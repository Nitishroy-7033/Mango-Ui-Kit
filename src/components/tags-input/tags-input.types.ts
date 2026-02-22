import type { ComponentPropsWithoutRef } from 'react';

export type BlurBehavior = 'clear' | 'add';

export interface TagsInputProps extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
    /** Initial tags for uncontrolled mode */
    defaultValue?: string[];
    /** Current tags for controlled mode */
    value?: string[];
    /** Callback when tags change */
    onValueChange?: (value: string[]) => void;
    /** Whether to render as child */
    asChild?: boolean;
    /** Validation function for new tags */
    onValidate?: (value: string) => boolean;
    /** Function to format displayed value */
    displayValue?: (value: string) => string;
    /** Whether to add tag on paste */
    addOnPaste?: boolean;
    /** Whether to add tag on tab */
    addOnTab?: boolean;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Whether tags are editable */
    editable?: boolean;
    /** Whether keyboard navigation loops */
    loop?: boolean;
    /** Behavior when input loses focus */
    blurBehavior?: BlurBehavior;
    /** String to split pasted content */
    delimiter?: string;
    /** Maximum number of tags */
    max?: number;
    /** Whether the input is required */
    required?: boolean;
    /** Whether the input is read-only */
    readOnly?: boolean;
    /** Name for form submission */
    name?: string;
}

export interface TagsInputLabelProps extends ComponentPropsWithoutRef<'label'> {
    asChild?: boolean;
}

export interface TagsInputInputProps extends ComponentPropsWithoutRef<'input'> {
    asChild?: boolean;
}

export interface TagsInputItemProps extends ComponentPropsWithoutRef<'div'> {
    value: string;
    asChild?: boolean;
    disabled?: boolean;
}

export interface TagsInputItemTextProps extends ComponentPropsWithoutRef<'span'> {
    asChild?: boolean;
}

export interface TagsInputItemDeleteProps extends ComponentPropsWithoutRef<'button'> {
    asChild?: boolean;
}

export interface TagsInputClearProps extends ComponentPropsWithoutRef<'button'> {
    asChild?: boolean;
    forceMount?: boolean;
}
