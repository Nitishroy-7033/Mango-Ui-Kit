import React from 'react';
import { cn } from '../../utils/cn';
import { Checkbox } from './checkbox';
import type { CheckboxGroupProps } from './checkbox.types';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
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
    const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue || []);
    const isControlled = value !== undefined;
    const currentValues = isControlled ? value : internalValue;

    const handleCheckboxChange = (checkedValue: string, isChecked: boolean) => {
        let newValue: string[];
        if (isChecked) {
            newValue = [...currentValues, checkedValue];
        } else {
            newValue = currentValues.filter((v) => v !== checkedValue);
        }

        if (!isControlled) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    return (
        <div className={cn('mango-checkbox-group', className)}>
            {label && <div className="mango-checkbox-group-label">{label}</div>}
            {description && <div className="mango-checkbox-group-description">{description}</div>}

            <div
                className={cn('mango-checkbox-group-items', `mango-checkbox-group-${orientation}`)}
                style={{ gap: gap }}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child.type === Checkbox) {
                        const checkboxChild = child as React.ReactElement<any>;
                        const childValue = checkboxChild.props.value as string;
                        return React.cloneElement(checkboxChild, {
                            checked: currentValues.includes(childValue),
                            onChange: (checked: boolean) => handleCheckboxChange(childValue, checked),
                            disabled: disabled || checkboxChild.props.disabled,
                            size: checkboxChild.props.size || size,
                            variant: checkboxChild.props.variant || variant,
                        });
                    }
                    return child;
                })}
            </div>

            {typeof error === 'string' && (
                <div className="mango-checkbox-error-message">{error}</div>
            )}
        </div>
    );
};

CheckboxGroup.displayName = 'CheckboxGroup';
