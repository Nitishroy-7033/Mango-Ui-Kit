import type { Meta, StoryObj } from '@storybook/react';

import { BottomNavigationBar } from './bottom-nav-bar';
import { Home, Search, Heart, Bell, User, Plus } from 'lucide-react';

const meta: Meta<typeof BottomNavigationBar> = {
    title: 'Components/BottomNavigationBar',
    component: BottomNavigationBar,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const items = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'search', label: 'Search', icon: <Search size={20} /> },
    { id: 'liked', label: 'Liked', icon: <Heart size={20} /> },
    { id: 'notifs', label: 'Alerts', icon: <Bell size={20} /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
];

const ctaItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'search', label: 'Search', icon: <Search size={20} /> },
    { id: 'add', label: 'Post', icon: <Plus size={24} />, isCTA: true },
    { id: 'notifs', label: 'Alerts', icon: <Bell size={20} /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} /> },
];

export const Classic: StoryObj<typeof BottomNavigationBar> = {
    args: {
        items,
        variant: 'classic',
        position: 'bottom',
    },
};

export const Floating: StoryObj<typeof BottomNavigationBar> = {
    args: {
        items,
        variant: 'floating',
        position: 'bottom',
        blur: true,
        shadow: '0 10px 40px rgba(250, 128, 41, 0.3)',
    },
};

export const CustomBubble: StoryObj<typeof BottomNavigationBar> = {
    args: {
        items,
        variant: 'bubble',
        bg: '#fff5ed',
        color: '#fa8029',
        radius: 12,
        shadow: 'none',
        mainAxisAlignment: 'spaceBetween',
    },
};

export const ActivePill: StoryObj<typeof BottomNavigationBar> = {
    args: {
        items,
        variant: 'active-pill',
    },
};

export const SidebarFullHeight: StoryObj<typeof BottomNavigationBar> = {
    args: {
        items,
        position: 'left',
        variant: 'classic',
        mainAxisAlignment: 'spaceBetween',
        size: 100, // custom width
    },
};

export const SidebarCentered: StoryObj<typeof BottomNavigationBar> = {
    args: {
        items,
        position: 'right',
        variant: 'floating',
        mainAxisAlignment: 'center',
        gap: 20,
    },
};

export const WithCTA: StoryObj<typeof BottomNavigationBar> = {
    args: {
        items: ctaItems,
        variant: 'floating',
    },
};
