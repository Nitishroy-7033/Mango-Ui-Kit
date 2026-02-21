# DataTable 📊

An enterprise-grade, high-performance table component designed for complex data management in big-company applications.

## Features
- 🧊 **Column/Row Freezing**: Support for sticky headers and fixed columns (left/right pins).
- 🔗 **Grouped Headers**: Multi-level headers with `children` for merged column labels.
- 🔢 **Pagination**: Built-in interactive pagination with page size switching and animated transitions.
- 🖱️ **Row Selection**: Checkbox/Radio selection with "Select All" capabilities.
- 🔄 **Infinite Scroll**: Native support for infinite data loading with configurable scroll thresholds.
- 🔍 **In-Header Search/Sort**: Integrated sorting and per-column search overlays.
- 🎨 **Deep Customization**: Full control over colors, sizing, and variants via props and CSS variables.
- 🧱 **Rich Content**: Custom Cell rendering and support for Header Widgets (buttons, icons, etc. in header).
- ⏳ **Loading & Empty States**: Polished empty indicators and backdrop-blur loading overlays with status spinners.

## Usage

### Simple Usage
```tsx
import { Table } from 'mango-ui-kit';

const columns = [
  { title: 'Name', dataIndex: 'name', sortable: true },
  { title: 'Age', dataIndex: 'age' },
];

const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
];

<Table columns={columns} dataSource={data} rowKey="id" />
```

### Advanced: Grouped Headers & Sticky Columns
```tsx
const columns = [
  {
    title: 'Identity',
    fixed: 'left',
    children: [
      { title: 'First', dataIndex: 'firstName', width: 100 },
      { title: 'Last', dataIndex: 'lastName', width: 100 },
    ]
  },
  { title: 'Address', dataIndex: 'address', width: 400 },
  { title: 'Operations', fixed: 'right', render: () => <button>Edit</button> }
];

<Table 
  columns={columns} 
  dataSource={data} 
  rowKey="id" 
  stickyHeader 
  height={500} 
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | `TableColumn[]` | `[]` | Definition of table columns. |
| `dataSource` | `any[]` | `[]` | The data to display. |
| `rowKey` | `string \| (record) => string` | - | Unique key for each row. |
| `loading` | `boolean` | `false` | Shows loading overlay. |
| `rowSelection` | `TableSelection` | - | Configuration for row checkboxes. |
| `pagination` | `PaginationConfig` | - | Config for pagination UI at the bottom. |
| `infiniteScroll` | `boolean` | `false` | Enable infinite scroll mode. |
| `stickyHeader` | `boolean` | `false` | Sticky the header during scroll. |
| `height` | `string \| number` | - | Fixed height for scrollable tables. |
| `variant` | `'default' \| 'bordered' \| 'ghost' \| 'plain'` | `'default'` | Visual style variant. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Padding/Font-size preset. |
| `colors` | `object` | - | Custom theme color overrides. |

## TableColumn Definition
- `title` (string | ReactNode): Header label.
- `dataIndex` (string): Path to data in record.
- `children` (TableColumn[]): Nested columns for merged headers.
- `fixed` ('left' | 'right'): Anchor column to side.
- `sortable` (boolean): Enable sort arrows.
- `searchable` (boolean): Enable search icon/popup.
- `width` (number | string): Column width.
- `render` (fn): Custom render logic for cells.
- `headerWidgets` (ReactNode): Custom items in the header cell.
