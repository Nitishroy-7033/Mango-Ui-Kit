import React from 'react';

type BaseInputProps = Record<string, unknown>;

export function createControlledComponent<
  P extends BaseInputProps,
  RefElement = HTMLElement,
>(
  Component: React.ForwardRefExoticComponent<P & React.RefAttributes<RefElement>>,
  displayName: string,
): React.ForwardRefExoticComponent<
  P & {
    value?: unknown;
    defaultValue?: unknown;
    onChange?: (value: unknown) => void;
    error?: string | boolean;
  } & React.RefAttributes<RefElement>
> {
  const ControlledComponent = React.forwardRef<RefElement, P & {
    value?: unknown;
    defaultValue?: unknown;
    onChange?: (value: unknown) => void;
    error?: string | boolean;
  }>((props, ref) => {
    const { value, defaultValue, onChange, error, ...rest } = props as P & {
      value?: unknown;
      defaultValue?: unknown;
      onChange?: (value: unknown) => void;
      error?: string | boolean;
    };

    return (
      <Component
        ref={ref}
        {...(rest as P)}
        {...(value !== undefined ? { value } : {})}
        {...(defaultValue !== undefined ? { defaultValue } : {})}
        {...(onChange ? { onChange } : {})}
        {...(error ? { error } : {})}
      />
    );
  });

  ControlledComponent.displayName = `Controlled${displayName}`;
  return ControlledComponent as React.ForwardRefExoticComponent<
    P & {
      value?: unknown;
      defaultValue?: unknown;
      onChange?: (value: unknown) => void;
      error?: string | boolean;
    } & React.RefAttributes<RefElement>
  >;
}
