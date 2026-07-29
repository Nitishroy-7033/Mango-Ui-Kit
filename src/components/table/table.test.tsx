import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Table } from './index';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
];

const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

describe('Table', () => {
  it('renders without crashing', () => {
    const { container } = render(<Table columns={columns} dataSource={data} rowKey="name" />);
    expect(container).toBeDefined();
  });

  it('renders column headers', () => {
    render(<Table columns={columns} dataSource={data} rowKey="name" />);
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByText('Age')).toBeDefined();
  });

  it('renders data rows', () => {
    render(<Table columns={columns} dataSource={data} rowKey="name" />);
    expect(screen.getByText('Alice')).toBeDefined();
    expect(screen.getByText('Bob')).toBeDefined();
    expect(screen.getByText('30')).toBeDefined();
    expect(screen.getByText('25')).toBeDefined();
  });

  it('shows empty text when no data', () => {
    render(<Table columns={columns} dataSource={[]} rowKey="name" emptyText="No data found" />);
    expect(screen.getByText('No data found')).toBeDefined();
  });
});
