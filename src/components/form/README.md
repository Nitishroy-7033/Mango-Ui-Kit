# Mango UI Form Integration

Provides generic form field utilities that work with **any** form library (react-hook-form, Formik, or raw React state).

## Usage

### 1. FormField (Layout wrapper)

```tsx
import { FormField } from 'mango-ui-kit/form';

<FormField label="Email" error={errors.email} required>
  <Input {...register('email')} />
</FormField>
```

### 2. useFormField (Controlled/Uncontrolled hook)

```tsx
import { useFormField } from 'mango-ui-kit/form';

const field = useFormField({
  name: 'username',
  value: formData.username,
  onChange: (val) => setFormData(prev => ({ ...prev, username: val })),
  error: 'Required field',
});

return (
  <FormField label="Username" error={field.error}>
    <Input {...field} />
  </FormField>
);
```

### 3. createControlledComponent (HOC)

Wraps any Mango UI input component with controlled/uncontrolled support:

```tsx
import { createControlledComponent } from 'mango-ui-kit/form';
import { Input } from 'mango-ui-kit/input';

const ControlledInput = createControlledComponent(Input, 'Input');

<ControlledInput
  value={value}
  onChange={handleChange}
  error={error}
  label="Name"
/>
```

## Integration with react-hook-form

```tsx
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'mango-ui-kit/input';
import { FormField } from 'mango-ui-kit/form';

const { control, formState: { errors } } = useForm();

<Controller
  name="email"
  control={control}
  rules={{ required: 'Email is required' }}
  render={({ field }) => (
    <FormField label="Email" error={errors.email?.message}>
      <Input {...field} />
    </FormField>
  )}
/>
```
