import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './table';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

type User = { name: string; email: string; role: string; status: string };

const columns = [
    { header: 'Name', accessor: 'name' as keyof User },
    { header: 'Email', accessor: 'email' as keyof User },
    { header: 'Role', accessor: 'role' as keyof User },
    {
        header: 'Status',
        accessor: 'status' as keyof User,
        render: (value: unknown) => (
            <span
                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    value === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-600'
                }`}
            >
                {String(value)}
            </span>
        ),
    },
];

const data: User[] = [
    { name: 'Alice Doe', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
    { name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
    { name: 'Dan Brown', email: 'dan@example.com', role: 'Editor', status: 'Active' },
];

export const Default: Story = {
    render: () => <Table columns={columns} data={data} />,
};

export const Empty: Story = {
    render: () => <Table columns={columns} data={[]} emptyText="No users found" />,
};

export const Clickable: Story = {
    render: () => (
        <Table
            columns={columns}
            data={data}
            onActionClick={(row) => alert(`Clicked: ${(row as User).name}`)}
        />
    ),
};
