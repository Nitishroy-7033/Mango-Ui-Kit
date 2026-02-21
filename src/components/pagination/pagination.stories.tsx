import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationWrapper = (args: any) => {
    const [page, setPage] = useState(args.currentPage || 1);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
};

export const Default: Story = {
    render: (args) => <PaginationWrapper {...args} />,
    args: {
        totalPages: 10,
        currentPage: 1,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '12px' }}>Modern (Default)</p>
                <PaginationWrapper totalPages={8} variant="modern" />
            </div>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '12px' }}>Pills</p>
                <PaginationWrapper totalPages={8} variant="pills" />
            </div>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '12px' }}>Classic</p>
                <PaginationWrapper totalPages={8} variant="classic" />
            </div>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '12px' }}>Simple (Grouped)</p>
                <PaginationWrapper totalPages={8} variant="simple" />
            </div>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '12px' }}>Minimal</p>
                <PaginationWrapper totalPages={8} variant="minimal" />
            </div>
            <div>
                <p style={{ fontWeight: 700, marginBottom: '12px' }}>Ghost</p>
                <PaginationWrapper totalPages={8} variant="ghost" />
            </div>
        </div>
    )
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <PaginationWrapper totalPages={5} size="sm" />
            <PaginationWrapper totalPages={5} size="md" />
            <PaginationWrapper totalPages={5} size="lg" />
        </div>
    )
};

export const WithLabels: Story = {
    render: (args) => <PaginationWrapper {...args} />,
    args: {
        totalPages: 20,
        showLabels: true,
        showFirstLast: true,
    }
};

export const LargePageRange: Story = {
    render: (args) => <PaginationWrapper {...args} />,
    args: {
        totalPages: 100,
        currentPage: 50,
        siblingCount: 1,
    }
};

export const CustomColors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <PaginationWrapper totalPages={10} color="#8b5cf6" variant="pills" />
            <PaginationWrapper totalPages={10} color="#10b981" variant="modern" />
            <PaginationWrapper totalPages={10} color="#f43f5e" variant="classic" />
        </div>
    )
}
