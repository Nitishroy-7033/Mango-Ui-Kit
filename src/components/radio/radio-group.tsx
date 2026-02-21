import React from 'react';
import { cn } from '../../utils/cn';
import { Radio } from './radio';
import type { RadioGroupProps } from './radio.types';

export const RadioGroup: React.FC<RadioGroupProps> = ({
    value,
    defaultValue,
    onChange,
    label,
    description,
    orientation = 'vertical',
    gap,
    children,
    disabled = false,
    size = 'md',
    variant = 'solid',
    error,
    className = '',
}) => {
    const [internalValue, setInternalValue] = React.useState<string>(defaultValue || '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleRadioChange = (radioValue: string) => {
        if (!isControlled) {
            setInternalValue(radioValue);
        }
        onChange?.(radioValue);
    };

    return (
        <div className={cn('mango-radio-group', className)}>
            {label && <div className="mango-radio-group-label">{label}</div>}
            {description && <div className="mango-radio-group-description">{description}</div>}

            <div
                className={cn('mango-radio-group-items', `mango-radio-group-${orientation}`)}
                style={{ gap: gap }}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type === Radio) {
                        const radioChild = child as React.ReactElement<any>;
                        const childValue = radioChild.props.value as string;
                        return React.cloneElement(radioChild, {
                            checked: currentValue === childValue,
                            onChange: () => handleRadioChange(childValue),
                            disabled: disabled || radioChild.props.disabled,
                            size: radioChild.props.size || size,
                            variant: radioChild.props.variant || variant,
                            name: label || 'mango-radio-group',
                        });
                    }
                    return child;
                })}
            </div>

            {typeof error === 'string' && (
                <div className="mango-radio-error-message">{error}</div>
            )}
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';
