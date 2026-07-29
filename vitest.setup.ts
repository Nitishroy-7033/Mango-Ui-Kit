/// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom';

// Mock scrollIntoView for jsdom (used by CommandPalette, Tabs, and others)
Element.prototype.scrollIntoView = () => {};

// Mock matchMedia for jsdom (used by ThemeProvider)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
