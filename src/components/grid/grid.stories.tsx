import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Grid } from './grid';
import { Card } from '../card';
import { Button } from '../button';
import { Badge } from '../badge';

const meta: Meta<typeof Grid> = {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;

const SampleItem = ({ index }: { index: number }) => (
    <Card style={{ padding: '16px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ width: '100%', height: '140px', background: '#f5f5f5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#ccc' }}>
            #{index}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
                <h4 style={{ margin: 0 }}>Product Title {index}</h4>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#666' }}>$299.00</p>
            </div>
            <Badge variant="success" size="xs">New</Badge>
        </div>
        <Button fullWidth size="sm">Add to Cart</Button>
    </Card>
);

export const Default: StoryObj<typeof Grid> = {
    render: () => (
        <div style={{ padding: '40px' }}>
            <Grid cols={3} gap="24px">
                {Array.from({ length: 6 }).map((_, i) => (
                    <SampleItem key={i} index={i + 1} />
                ))}
            </Grid>
        </div>
    ),
};

export const Responsive: StoryObj<typeof Grid> = {
    render: () => (
        <div style={{ padding: '40px' }}>
            <h3 style={{ marginBottom: '20px' }}>Resize your browser to see columns change</h3>
            <Grid
                cols={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
                gap="16px"
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <SampleItem key={i} index={i + 1} />
                ))}
            </Grid>
        </div>
    ),
};

export const LoadingState: StoryObj<typeof Grid> = {
    render: () => (
        <div style={{ padding: '40px' }}>
            <Grid loading={true} cols={3} gap="24px" skeletonCount={6} />
        </div>
    ),
};

export const InfiniteScroll: StoryObj<typeof Grid> = {
    render: () => {
        const [items, setItems] = React.useState([1, 2, 3, 4, 5, 6]);
        const [loading, setLoading] = React.useState(false);

        const loadMore = () => {
            if (loading || items.length > 24) return;
            setLoading(true);
            setTimeout(() => {
                setItems(prev => [...prev, ...Array.from({ length: 6 }, (_, i) => prev.length + i + 1)]);
                setLoading(false);
            }, 1000);
        };

        return (
            <div style={{ padding: '40px' }}>
                <Grid
                    maxHeight={500}
                    loading={loading}
                    onScrollBottom={loadMore}
                    cols={3}
                    gap="24px"
                    className="p-4 bg-gray-50 rounded-lg"
                >
                    {items.map(i => (
                        <SampleItem key={i} index={i} />
                    ))}
                </Grid>
            </div>
        );
    }
};

export const Pagination: StoryObj<typeof Grid> = {
    render: () => {
        const [page, setPage] = React.useState(1);
        const pageSize = 4;
        const total = 16;

        return (
            <div style={{ padding: '40px' }}>
                <Grid
                    cols={2}
                    gap="24px"
                    pagination={{
                        current: page,
                        total: total,
                        pageSize: pageSize,
                        onChange: setPage
                    }}
                >
                    {Array.from({ length: pageSize }).map((_, i) => {
                        const idx = (page - 1) * pageSize + i + 1;
                        if (idx > total) return null;
                        return <SampleItem key={idx} index={idx} />;
                    })}
                </Grid>
            </div>
        );
    }
};

export const LoadMoreBlog: StoryObj<typeof Grid> = {
    render: () => {
        const [items, setItems] = React.useState(Array.from({ length: 8 }, (_, i) => i + 1));
        const [loading, setLoading] = React.useState(false);

        const handleLoadMore = () => {
            setLoading(true);
            setTimeout(() => {
                setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1)]);
                setLoading(false);
            }, 1000);
        };

        return (
            <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                    <h2>Latest Articles</h2>
                    <p>Total items: {items.length}</p>
                </div>

                <Grid
                    cols={{ base: 2, sm: 2, md: 4 }}
                    gap="24px"
                    loading={loading}
                    loadingCols={{ base: 2, sm: 2, md: 4 }}
                    loadingGap="32px"
                    skeletonCount={4}
                >
                    {items.map(i => (
                        <Card key={i} style={{ overflow: 'hidden', border: '1px solid #eee' }}>
                            <div style={{ height: '160px', background: '#f0f4f8' }} />
                            <div style={{ padding: '16px' }}>
                                <Badge variant="info">Article {i}</Badge>
                                <h4 style={{ margin: '12px 0' }}>The Future of AI in Modern Design Systems</h4>
                                <Button variant="link" size="sm" style={{ padding: 0 }}>Read More →</Button>
                            </div>
                        </Card>
                    ))}
                </Grid>

                {items.length < 50 && !loading && (
                    <div style={{ marginTop: '40px', textAlign: 'center' }}>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={handleLoadMore}
                            style={{ minWidth: '200px' }}
                        >
                            Load More Articles
                        </Button>
                    </div>
                )}
            </div>
        );
    }
};
