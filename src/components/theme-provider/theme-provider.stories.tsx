import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider, useTheme } from './theme-provider';
import type { ThemeConfig } from './theme-provider';

const meta: Meta<typeof ThemeProvider> = {
    title: 'System/ThemeProvider',
    component: ThemeProvider,
    parameters: { layout: 'padded' },
};

export default meta;

// ── Demo component that consumes the theme ────────────────────────────────────

const ThemeShowcase = () => {
    const { themeMode, toggleTheme, tokens, colors, custom } = useTheme();

    return (
        <div style={{
            background: tokens.background,
            minHeight: '100vh',
            padding: 32,
            transition: 'background 0.3s ease',
            fontFamily: 'sans-serif',
        }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <h2 style={{ color: tokens.textColor, margin: 0, fontSize: 22, fontWeight: 700 }}>
                    🥭 ThemeProvider Demo
                </h2>
                <button
                    onClick={toggleTheme}
                    style={{
                        background: tokens.primaryColor,
                        color: '#fff',
                        border: 'none',
                        borderRadius: 10,
                        padding: '10px 20px',
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: 'pointer',
                    }}
                >
                    {themeMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>

            {/* Built-in color grid */}
            <h3 style={{ color: tokens.labelColor, fontSize: 14, fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Built-in Color Tokens
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12, marginBottom: 32 }}>
                {(Object.entries(colors) as [string, string][])
                    .filter(([, v]) => v.startsWith('#') || v.startsWith('rgb'))
                    .map(([key, value]) => (
                        <div key={key} style={{
                            background: tokens.primaryContainercolor,
                            border: `1px solid ${tokens.borderColor}`,
                            borderRadius: 12,
                            padding: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                        }}>
                            <div style={{ width: '100%', height: 32, borderRadius: 8, background: value }} />
                            <div>
                                <div style={{ fontSize: 11, fontWeight: 600, color: tokens.textColor }}>{key}</div>
                                <div style={{ fontSize: 10, color: tokens.labelSecondaryColor, fontFamily: 'monospace' }}>{value}</div>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Custom tokens */}
            {Object.keys(custom).length > 0 && (
                <>
                    <h3 style={{ color: tokens.labelColor, fontSize: 14, fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Custom Tokens
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 32 }}>
                        {(Object.entries(custom) as [string, string][]).map(([key, value]) => (
                            <div key={key} style={{
                                background: tokens.primaryContainercolor,
                                border: `1px solid ${tokens.borderColor}`,
                                borderRadius: 12,
                                padding: 12,
                            }}>
                                {(value.startsWith('#') || value.startsWith('rgb') || value.startsWith('linear')) && (
                                    <div style={{ width: '100%', height: 28, borderRadius: 8, background: value, marginBottom: 8 }} />
                                )}
                                <div style={{ fontSize: 11, fontWeight: 600, color: tokens.textColor }}>{key}</div>
                                <div style={{ fontSize: 10, color: tokens.labelSecondaryColor, fontFamily: 'monospace' }}>{value}</div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Status color row */}
            <h3 style={{ color: tokens.labelColor, fontSize: 14, fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Status Colors
            </h3>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[
                    { label: '✅ Success', bg: tokens.successColor },
                    { label: '⚠️ Warning', bg: tokens.warningColor },
                    { label: '❌ Error', bg: tokens.errorColor },
                    { label: 'ℹ️ Info', bg: tokens.infoColor },
                ].map(({ label, bg }) => (
                    <div key={label} style={{
                        background: bg,
                        color: '#fff',
                        padding: '10px 18px',
                        borderRadius: 10,
                        fontSize: 13,
                        fontWeight: 600,
                    }}>
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
};

// ── Stories ───────────────────────────────────────────────────────────────────

export const Default: StoryObj<typeof ThemeProvider> = {
    render: () => (
        <ThemeProvider defaultThemeMode="light">
            <ThemeShowcase />
        </ThemeProvider>
    ),
};

const purpleTheme: Partial<ThemeConfig> = {
    light: {
        colors: {
            primaryColor: '#7c3aed',
            lightPrimaryColor: '#f5f3ff',
            accent: '#7c3aed',
            borderColor: '#ddd6fe',
            primaryContainercolor: '#ffffff',
            secondaryContainercolor: '#faf5ff',
            textColor: '#1e1b4b',
            labelColor: '#3730a3',
            labelSecondaryColor: '#6d28d9',
            shadowColor: '124, 58, 237',
        },
        custom: {
            heroBackground: '#f5f3ff',
            cardAccent: '#7c3aed',
            sidebarWidth: '260px',
            bannerGradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
        },
    },
    dark: {
        colors: {
            primaryColor: '#a78bfa',
            lightPrimaryColor: '#2e1065',
            background: '#0f0a1e',
            primaryContainercolor: '#1e1b4b',
            secondaryContainercolor: '#12104c',
            textColor: '#f5f3ff',
            labelColor: '#ede9fe',
            borderColor: '#4c1d95',
            accent: '#a78bfa',
            shadowColor: '167, 139, 250',
        },
        custom: {
            heroBackground: '#1e1b4b',
            cardAccent: '#a78bfa',
            bannerGradient: 'linear-gradient(135deg, #4c1d95, #6d28d9)',
        },
    },
};

export const CustomPurpleTheme: StoryObj<typeof ThemeProvider> = {
    render: () => (
        <ThemeProvider defaultThemeMode="light" theme={purpleTheme}>
            <ThemeShowcase />
        </ThemeProvider>
    ),
};

export const StartsInDarkMode: StoryObj<typeof ThemeProvider> = {
    render: () => (
        <ThemeProvider defaultThemeMode="dark">
            <ThemeShowcase />
        </ThemeProvider>
    ),
};
