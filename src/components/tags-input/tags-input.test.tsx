import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TagsInput, TagsInputLabel, TagsInputInput, TagsInputItem, TagsInputItemText, TagsInputItemDelete, TagsInputClear } from './index';

describe('TagsInput', () => {
  it('renders without crashing', () => {
    const { container } = render(<TagsInput><TagsInputInput /></TagsInput>);
    expect(container).toBeDefined();
  });

  it('renders label when TagsInputLabel is used', () => {
    render(<TagsInput><TagsInputLabel>Frameworks</TagsInputLabel><TagsInputInput /></TagsInput>);
    expect(screen.getByText('Frameworks')).toBeDefined();
  });

  it('renders tags from defaultValue', () => {
    render(
      <TagsInput defaultValue={['React', 'Vue']}>
        <TagsInputInput />
        <TagsInputItem value="React">
          <TagsInputItemText>React</TagsInputItemText>
        </TagsInputItem>
        <TagsInputItem value="Vue">
          <TagsInputItemText>Vue</TagsInputItemText>
        </TagsInputItem>
      </TagsInput>
    );
    expect(screen.getByText('React')).toBeDefined();
    expect(screen.getByText('Vue')).toBeDefined();
  });

  it('calls onValueChange when addTag is triggered', () => {
    const onValueChange = vi.fn();
    render(<TagsInput onValueChange={onValueChange}><TagsInputInput /></TagsInput>);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Svelte' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onValueChange).toHaveBeenCalledWith(['Svelte']);
  });
});
