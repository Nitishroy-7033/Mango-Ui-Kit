import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { List, ListItem } from './list';
import { Play, ChevronRight, Mail, Star, Trash, User, Settings } from 'lucide-react';
import { Badge } from '../badge';
import { Button } from '../button';

const meta: Meta<typeof List> = {
    title: 'Components/List',
    component: List,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof List> = {
    render: () => (
        <div style={{ width: '400px' }}>
            <List>
                <ListItem title="Item 1" description="Description for item 1" iconStart={<Mail size={20} />} />
                <ListItem title="Item 2" description="Description for item 2" iconStart={<Star size={20} />} />
                <ListItem title="Item 3" description="Description for item 3" iconStart={<Settings size={20} />} />
            </List>
        </div>
    ),
};

export const VideoList: StoryObj<typeof List> = {
    render: () => (
        <div style={{ width: '500px' }}>
            <List header={<h3 style={{ padding: '0 16px' }}>Recommended Videos</h3>}>
                <ListItem
                    title="When The Morning Dawns - DJ Silver Club Remix"
                    description="20 hours ago"
                    iconStart={<div style={{ width: 80, height: 60, background: '#002d44', borderRadius: 4 }} />}
                    iconEnd={<Play size={20} fill="currentColor" />}
                />
                <ListItem
                    title="Cheap Airline Tickets Great Ways To Save"
                    description="20 hours ago"
                    iconStart={<div style={{ width: 80, height: 60, background: '#ddd', borderRadius: 4 }} />}
                    iconEnd={<Play size={20} fill="currentColor" />}
                />
                <ListItem
                    title="Vacation Home Rental Success"
                    description="20 hours ago"
                    iconStart={<div style={{ width: 80, height: 60, background: '#443322', borderRadius: 4 }} />}
                    iconEnd={<Play size={20} fill="currentColor" />}
                />
            </List>
        </div>
    ),
};

export const TaskList: StoryObj<typeof List> = {
    render: () => (
        <div style={{ width: '400px' }}>
            <List>
                <ListItem
                    title="Buy groceries"
                    description="Jul 20, 2023 at 9:00 AM"
                    iconEnd={<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Badge variant="warning">Pending</Badge>
                        <ChevronRight size={16} color="#ccc" />
                    </div>}
                />
                <ListItem
                    title="Finish homework"
                    description="Jul 21, 2023 at 3:30 PM"
                    iconEnd={<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Badge variant="warning">Pending</Badge>
                        <ChevronRight size={16} color="#ccc" />
                    </div>}
                />
                <ListItem
                    title="Read a book"
                    description="Jul 19, 2023 at 6:00 PM"
                    iconEnd={<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Badge variant="success">Completed</Badge>
                        <ChevronRight size={16} color="#ccc" />
                    </div>}
                />
            </List>
        </div>
    ),
};

export const ShimmerLoading: StoryObj<typeof List> = {
    args: {
        loading: true,
        loadingType: 'shimmer',
        skeletonCount: 4,
        style: { width: '400px' }
    }
};

export const InfiniteScroll: StoryObj<typeof List> = {
    render: () => {
        const [items, setItems] = React.useState([1, 2, 3, 4, 5]);
        const [loading, setLoading] = React.useState(false);

        const loadMore = () => {
            if (loading || items.length > 20) return;
            setLoading(true);
            setTimeout(() => {
                setItems(prev => [...prev, prev.length + 1, prev.length + 2, prev.length + 3]);
                setLoading(false);
            }, 1500);
        };

        return (
            <div style={{ width: '400px', border: '1px solid #eee', borderRadius: 12 }}>
                <List
                    maxHeight={300}
                    loading={loading}
                    loadingType="spinner"
                    onScrollBottom={loadMore}
                >
                    {items.map(i => (
                        <ListItem key={i} title={`Infinite Item ${i}`} description={`Description for infinite item ${i}`} iconStart={<User size={18} />} />
                    ))}
                </List>
            </div>
        );
    }
};

export const NumericPagination: StoryObj<typeof List> = {
    render: () => {
        const [page, setPage] = React.useState(1);
        const pageSize = 3;
        const total = 10;

        return (
            <div style={{ width: '400px' }}>
                <List
                    pagination={{
                        current: page,
                        total: total,
                        pageSize: pageSize,
                        onChange: setPage
                    }}
                >
                    {Array.from({ length: pageSize }).map((_, i) => {
                        const itemIdx = (page - 1) * pageSize + i + 1;
                        if (itemIdx > total) return null;
                        return <ListItem key={itemIdx} title={`Paged Item ${itemIdx}`} description="Support numeric pagination out of the box" iconStart={<Settings size={18} />} />;
                    })}
                </List>
            </div>
        );
    }
};

export const InteractiveItems: StoryObj<typeof List> = {
    render: () => {
        const [selected, setSelected] = React.useState<number | null>(null);
        return (
            <div style={{ width: '400px' }}>
                <List>
                    {[1, 2, 3].map(i => (
                        <ListItem
                            key={i}
                            active={selected === i}
                            onClick={() => setSelected(i)}
                            title={`Clickable Item ${i}`}
                            description="Selectable with active states"
                            iconStart={<User size={20} />}
                            iconEnd={<Button variant="ghost" iconOnly onClick={(e) => { e.stopPropagation(); alert('Delete clicked'); }}><Trash size={16} /></Button>}
                        />
                    ))}
                </List>
            </div>
        );
    }
};

export const MessageView: StoryObj<typeof List> = {
    render: () => (
        <div style={{ width: '400px', background: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
            <List withDividers={false} gap="8px" bg="transparent">
                <ListItem
                    title="Design Team"
                    description="Sent an attachment • 2m ago"
                    iconStart={<div style={{ width: 48, height: 48, borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>DT</div>}
                    iconEnd={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                        <span style={{ fontSize: '12px', color: '#94a3b8' }}>10:45 AM</span>
                        <Badge variant="primary" size="xs" pill>3</Badge>
                    </div>}
                    p="12px"
                    bg="#fff"
                    style={{ borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
                />
                <ListItem
                    title="Nitish Roy"
                    description="Hey, check out the new Mango UI Kit updates!"
                    iconStart={<div style={{ width: 48, height: 48, borderRadius: '50%', background: '#ff8029', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>NR</div>}
                    iconEnd={<span style={{ fontSize: '12px', color: '#94a3b8' }}>Yesterday</span>}
                    p="12px"
                    bg="#fff"
                    style={{ borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
                />
            </List>
        </div>
    )
};

export const ChecklistVariation: StoryObj<typeof List> = {
    render: () => (
        <div style={{ width: '400px' }}>
            <List header={<h4 style={{ margin: '0 0 16px 16px' }}>Project Tasks</h4>}>
                <ListItem
                    title="Initialize React App"
                    description="Set up the base project structure"
                    iconStart={<input type="checkbox" checked readOnly style={{ width: 18, height: 18, accentColor: 'var(--primaryColor)' }} />}
                    style={{ textDecoration: 'line-through', opacity: 0.6 }}
                />
                <ListItem
                    title="Design System Specs"
                    description="Define tokens and color palettes"
                    iconStart={<input type="checkbox" style={{ width: 18, height: 18, accentColor: 'var(--primaryColor)' }} />}
                />
                <ListItem
                    title="Component Development"
                    description="Build core atomic components"
                    iconStart={<input type="checkbox" style={{ width: 18, height: 18, accentColor: 'var(--primaryColor)' }} />}
                />
            </List>
        </div>
    )
};

export const SettingsPanel: StoryObj<typeof List> = {
    render: () => (
        <div style={{ width: '450px', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
            <List withDividers>
                <ListItem
                    title="Dark Mode"
                    description="Switch between light and dark themes"
                    iconStart={<div style={{ color: '#6366f1' }}><User size={20} /></div>}
                    iconEnd={<div style={{ width: 36, height: 20, background: 'var(--primaryColor)', borderRadius: '20px', position: 'relative' }}>
                        <div style={{ width: 16, height: 16, background: '#fff', borderRadius: '50%', position: 'absolute', top: 2, right: 2 }} />
                    </div>}
                    hoverEffect="background"
                />
                <ListItem
                    title="Notifications"
                    description="Allow push notifications"
                    iconStart={<div style={{ color: '#f59e0b' }}><Settings size={20} /></div>}
                    iconEnd={<div style={{ width: 36, height: 20, background: '#cbd5e1', borderRadius: '20px', position: 'relative' }}>
                        <div style={{ width: 16, height: 16, background: '#fff', borderRadius: '50%', position: 'absolute', top: 2, left: 2 }} />
                    </div>}
                />
                <ListItem
                    title="Account Privacy"
                    description="Public"
                    iconStart={<div style={{ color: '#22c55e' }}><User size={20} /></div>}
                    iconEnd={<ChevronRight size={18} color="#94a3b8" />}
                />
            </List>
        </div>
    )
};
