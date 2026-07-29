import React, { useCallback, useId } from 'react';

export interface UseFormFieldOptions<T = unknown> {
  name: string;
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  error?: string | boolean;
  disabled?: boolean;
  required?: boolean;
}

export interface FormFieldReturn<T = unknown> {
  name: string;
  id: string;
  value: T | undefined;
  onChange: (value: T) => void;
  error: string | boolean | undefined;
  disabled: boolean | undefined;
  required: boolean | undefined;
  ariaAttributes: {
    'aria-invalid'?: boolean;
    'aria-required'?: boolean;
  };
}

export function useFormField<T = unknown>({
  name,
  value: controlledValue,
  defaultValue,
  onChange: externalOnChange,
  error,
  disabled,
  required,
}: UseFormFieldOptions<T>): FormFieldReturn<T> {
  const generatedId = useId();
  const [internalValue, setInternalValue] = React.useState<T | undefined>(defaultValue);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = useCallback((newValue: T) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    externalOnChange?.(newValue);
  }, [isControlled, externalOnChange]);

  return {
    name,
    id: `mango-field-${name}-${generatedId}`,
    value: currentValue,
    onChange: handleChange,
    error,
    disabled,
    required,
    ariaAttributes: {
      ...(error ? { 'aria-invalid': true as const } : {}),
      ...(required ? { 'aria-required': true as const } : {}),
    },
  };
}
