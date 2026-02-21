export interface RatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: number;
  className?: string;
}
