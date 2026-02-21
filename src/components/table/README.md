# Table 🥭

A flexible, data-driven table component with support for custom rendering and column widths.

## Features
- 📊 **Type Safe**: Generic support for any data structure.
- 🎨 **Custom Rendering**: Pass a `render` function to customize cell output.
- 📐 **Column Control**: Define specific widths for each column.
- 🌫️ **Modern Style**: Transparent container with glassmorphism touches.

## Usage

```tsx
import { Table } from 'mango-ui-kit';

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Status', accessor: 'status', render: (val) => <Badge variant="success">{val}</Badge> },
  { header: 'Action', accessor: 'id', render: (id) => <Button size="sm">Edit</Button> },
];

const data = [
  { id: 1, name: 'John Doe', status: 'Active' },
  { id: 2, name: 'Jane Smith', status: 'Pending' },
];

<Table columns={columns} data={data} />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | `TableColumn[]` | `[]` | Array of column definitions (header, accessor, width, render). |
| `data` | `T[]` | `[]` | The array of objects to display. |
| `className` | `string` | - | Additional CSS classes for the container. |

### TableColumn (Type)
- `header` (string): The text shown in the header cell.
- `accessor` (string): The key in your data object to pull the value from.
- `width` (string/number): CSS width for the column.
- `render` (function): `(value, row) => ReactNode`. Custom cell renderer.
