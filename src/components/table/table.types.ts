import type { ReactNode, CSSProperties } from 'react';

export type SortOrder = 'asc' | 'desc' | null;
export type FixedType = 'left' | 'right' | boolean;

export interface TableColumn<T = any> {
  /** Title for the header */
  title: string | ReactNode;
  /** Key to access data from row */
  dataIndex?: string;
  /** Unique key if dataIndex is missing */
  key?: string;
  /** Width of the column */
  width?: number | string;
  /** Sub-columns for merged headers */
  children?: TableColumn<T>[];
  /** Alignment of content */
  align?: 'left' | 'center' | 'right';
  /** Whether the column is sortable */
  sortable?: boolean;
  /** Custom render function */
  render?: (value: any, record: T, index: number) => ReactNode;
  /** Sticky position */
  fixed?: FixedType;
  /** Custom widgets displayed in header */
  headerWidgets?: ReactNode;
  /** Enable column search */
  searchable?: boolean;
  /** Enable column filter */
  filterable?: boolean;
  /** Custom filter options */
  filterOptions?: { label: string; value: any }[];
  /** Custom class for this column's cells */
  className?: string;
  /** Custom style for this column's cells */
  style?: CSSProperties;
}

export interface PaginationConfig {
  current?: number;
  pageSize?: number;
  total?: number;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  onChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  simple?: boolean;
}

export interface TableSelection<T = any> {
  selectedRowKeys: (string | number)[];
  onChange: (keys: (string | number)[], selectedRows: T[]) => void;
  type?: 'checkbox' | 'radio';
}

export type TableVariant = 'default' | 'bordered' | 'ghost' | 'plain';
export type TableSize = 'sm' | 'md' | 'lg';

export interface TableAction {
  id: string;
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
}

export interface TableProps<T = any> {
  /** Array of columns */
  columns: TableColumn<T>[];
  /** Array of data */
  dataSource: T[];
  /** Loading state */
  loading?: boolean;
  /** Selection config */
  rowSelection?: TableSelection<T>;
  /** Pagination config */
  pagination?: PaginationConfig | false;

  // Card / DataTable props
  /** Main title of the table card */
  title?: string;
  /** Subtitle or description */
  description?: string;
  /** Content for the badge next to title */
  badgeContent?: string | number;
  /** Variant for the title badge */
  badgeVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
  /** Actions in the top right corner */
  headerActions?: TableAction[];
  /** Whether to show the header section */
  showHeader?: boolean;
  /** Whether to show the footer section */
  showFooter?: boolean;
  /** Whether to show 'Page X of Y' text in footer */
  showPageCount?: boolean;
  /** Whether to show 'Previous' and 'Next' labels on pagination buttons */
  showPaginationLabels?: boolean;
  /** Custom footer element (overrides default pagination if provided) */
  footer?: ReactNode;

  /** Enable infinite scroll */
  infiniteScroll?: boolean;
  /** Threshold for infinite scroll (0-1) */
  scrollThreshold?: number;
  /** Callback for infinite scroll */
  onLoadMore?: () => void;
  /** Whether there is more data to load (for infinite scroll) */
  hasMore?: boolean;
  /** Unique key for rows */
  rowKey: string | ((record: T) => string | number);
  /** Sticky header toggle */
  stickyHeader?: boolean;
  /** Fixed height for scrolling */
  height?: number | string;
  /** Message shown when no data */
  emptyText?: string | ReactNode;
  /** Row hover callback */
  onRow?: (record: T, index: number) => object;
  /** Table variant */
  variant?: TableVariant;
  /** Visual density */
  size?: TableSize;
  /** Theming */
  colors?: {
    headerBg?: string;
    headerColor?: string;
    rowBg?: string;
    rowHoverBg?: string;
    borderColor?: string;
    textColor?: string;
  };
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: CSSProperties;
}
