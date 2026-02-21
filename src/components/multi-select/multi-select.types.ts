export interface MultiSelectOption {
  id: string | number;
  name: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: (string | number)[];
  onChange: (value: (string | number)[]) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}
