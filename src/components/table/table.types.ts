import type { ReactNode } from 'react';

export interface TableColumn<T = Record<string, unknown>> {
  header: string;
  accessor: keyof T;
  width?: string;
  render?: (value: unknown, row: T) => ReactNode;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  onActionClick?: (row: T) => void;
  className?: string;
  emptyText?: string;
}
