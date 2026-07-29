import React from 'react';
import { cn } from '../../utils/cn';

export interface FormFieldProps {
  name: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string | boolean;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
  labelClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  helperText,
  error,
  required,
  className,
  children,
  labelClassName,
  errorClassName,
  helperClassName,
}) => {
  const errorId = error ? `mango-field-error` : undefined;

  return (
    <div className={cn('mango-form-field', className)}>
      {label && (
        <label className={cn('mango-form-label', labelClassName)}>
          {label}
          {required && <span className="mango-form-required" aria-hidden="true"> *</span>}
        </label>
      )}
      <div className="mango-form-control" aria-invalid={!!error} aria-errormessage={errorId}>
        {children}
      </div>
      {error && typeof error === 'string' && (
        <p id={errorId} className={cn('mango-form-error', errorClassName)} role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className={cn('mango-form-helper', helperClassName)}>{helperText}</p>
      )}
    </div>
  );
};

FormField.displayName = 'FormField';
