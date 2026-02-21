import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './table';
import { Badge } from '../badge';
import { Download } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const dataSource = [
    { id: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['NICE', 'DEVELOPER'], email: 'john@example.com', company: 'Google', phone: '+1 234 567 890' },
    { id: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['LOSER'], email: 'jim@example.com', company: 'Apple', phone: '+44 20 7946 0958' },
    { id: 3, name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['COOL', 'TEACHER'], email: 'joe@example.com', company: 'Microsoft', phone: '+61 2 9876 5432' },
    { id: 4, name: 'Jane Doe', age: 28, address: 'Paris No. 4 Rue de Rivoli', tags: ['NICE', 'DESIGNER'], email: 'jane@example.com', company: 'Figma', phone: '+33 1 42 68 53 00' },
    { id: 5, name: 'Sam Smith', age: 45, address: 'Tokyo No. 2 Shibuya', tags: ['COOL', 'PRODUCT'], email: 'sam@example.com', company: 'Sony', phone: '+81 3 3448 2111' },
];

const columns: any[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        width: 60,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sortable: true,
        searchable: true,
        fixed: 'left',
        width: 160,
        render: (text: string) => <a style={{ color: 'var(--primaryColor)', fontWeight: 600 }}>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sortable: true,
        width: 100,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 250,
        render: (text: string) => <span>{text || 'user@example.com'}</span>
    },
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        width: 200,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 300,
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        width: 150,
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: (tags: string[]) => (
            <div style={{ display: 'flex', gap: '4px' }}>
                {tags.map(tag => (
                    <Badge key={tag} variant={tag === 'LOSER' ? 'outline' : 'primary'} size="sm">
                        {tag}
                    </Badge>
                ))}
            </div>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        fixed: 'right',
        width: 200,
        headerWidgets: <Download size={14} style={{ cursor: 'pointer', opacity: 0.6 }} />,
        render: (_: any, record: any) => (
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem' }}>
                <a style={{ color: 'var(--primaryColor)' }}>Invite {record.name.split(' ')[0]}</a>
                <a style={{ color: '#ef4444' }}>Delete</a>
            </div>
        ),
    },
];

export const Enterprise: Story = {
    render: () => {
        const [selectedKeys, setSelectedKeys] = useState<any[]>([]);
        const [page, setPage] = useState(1);

        return (
            <div style={{ width: '100%', padding: '24px', boxSizing: 'border-box' }}>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey="id"
                    stickyHeader
                    height={400}
                    rowSelection={{
                        selectedRowKeys: selectedKeys,
                        onChange: (keys) => setSelectedKeys(keys),
                    }}
                    pagination={{
                        current: page,
                        pageSize: 10,
                        total: 100,
                        onChange: (p) => setPage(p),
                    }}
                />
            </div>
        );
    }
};

export const GroupedHeaders: Story = {
    render: () => {
        const groupedColumns: any[] = [
            {
                title: 'User Info',
                children: [
                    { title: 'First Name', dataIndex: 'firstName', key: 'firstName', width: 120 },
                    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName', width: 120 },
                ]
            },
            { title: 'Age', dataIndex: 'age', key: 'age', width: 80 },
            { title: 'Address', dataIndex: 'address', key: 'address', width: 300 },
            { title: 'Status', dataIndex: 'status', key: 'status', width: 100 },
        ];

        const data = [
            { id: 1, firstName: 'John', lastName: 'Brown', age: 32, address: 'New York', status: 'Active' },
            { id: 2, firstName: 'Jim', lastName: 'Green', age: 42, address: 'London', status: 'Inactive' },
            { id: 3, firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney', status: 'Active' },
        ];

        return (
            <div style={{ width: '100%', minWidth: '800px', padding: '24px', boxSizing: 'border-box' }}>
                <Table columns={groupedColumns} dataSource={data} rowKey="id" variant="bordered" />
            </div>
        );
    }
};

export const InfiniteScroll: Story = {
    render: () => {
        const [data, setData] = useState(dataSource);
        const [loading, setLoading] = useState(false);

        const loadMore = () => {
            setLoading(true);
            setTimeout(() => {
                const nextBatch = dataSource.map(d => ({ ...d, id: Math.random() }));
                setData(prev => [...prev, ...nextBatch]);
                setLoading(false);
            }, 1500);
        };

        return (
            <div style={{ width: '100%', padding: '24px', boxSizing: 'border-box' }}>
                <Table
                    columns={columns.slice(0, 4)}
                    dataSource={data}
                    rowKey="id"
                    height={300}
                    infiniteScroll
                    onLoadMore={loadMore}
                    hasMore={data.length < 50}
                    loading={loading}
                    stickyHeader
                />
            </div>
        );
    }
};

export const LoadingState: Story = {
    args: {
        columns: columns,
        dataSource: [],
        loading: true,
        rowKey: 'id',
    }
};

export const EmptyState: Story = {
    args: {
        columns: columns,
        dataSource: [],
        rowKey: 'id',
        emptyText: 'No orders found matching your criteria.',
    }
};
