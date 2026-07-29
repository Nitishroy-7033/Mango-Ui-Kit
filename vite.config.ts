import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['src'],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        button: resolve(__dirname, 'src/components/button/index.ts'),
        input: resolve(__dirname, 'src/components/input/index.ts'),
        modal: resolve(__dirname, 'src/components/modal/index.ts'),
        toast: resolve(__dirname, 'src/components/toast/index.ts'),
        table: resolve(__dirname, 'src/components/table/index.ts'),
        checkbox: resolve(__dirname, 'src/components/checkbox/index.ts'),
        radio: resolve(__dirname, 'src/components/radio/index.ts'),
        toggle: resolve(__dirname, 'src/components/toggle/index.ts'),
        'theme-provider': resolve(__dirname, 'src/components/theme-provider/index.ts'),
        tooltip: resolve(__dirname, 'src/components/tooltip/index.ts'),
        badge: resolve(__dirname, 'src/components/badge/index.ts'),
        avatar: resolve(__dirname, 'src/components/avatar/index.ts'),
        card: resolve(__dirname, 'src/components/card/index.ts'),
        layout: resolve(__dirname, 'src/components/layout/index.ts'),
        box: resolve(__dirname, 'src/components/box/index.ts'),
        accordion: resolve(__dirname, 'src/components/accordion/index.ts'),
        alert: resolve(__dirname, 'src/components/alert/index.ts'),
        'app-bar': resolve(__dirname, 'src/components/app-bar/index.ts'),
        'avatar-group': resolve(__dirname, 'src/components/avatar-group/index.ts'),
        'bottom-nav-bar': resolve(__dirname, 'src/components/bottom-nav-bar/index.ts'),
        breadcrumbs: resolve(__dirname, 'src/components/breadcrumbs/index.ts'),
        'calendar-date-picker': resolve(__dirname, 'src/components/calendar-date-picker/index.ts'),
        chip: resolve(__dirname, 'src/components/chip/index.ts'),
        'code-snippet': resolve(__dirname, 'src/components/code-snippet/index.ts'),
        'command-palette': resolve(__dirname, 'src/components/command-palette/index.ts'),
        'date-range-picker': resolve(__dirname, 'src/components/date-range-picker/index.ts'),
        dialog: resolve(__dirname, 'src/components/dialog/index.ts'),
        drawer: resolve(__dirname, 'src/components/drawer/index.ts'),
        dropdown: resolve(__dirname, 'src/components/dropdown/index.ts'),
        grid: resolve(__dirname, 'src/components/grid/index.ts'),
        list: resolve(__dirname, 'src/components/list/index.ts'),
        'media-uploader': resolve(__dirname, 'src/components/media-uploader/index.ts'),
        'multi-select': resolve(__dirname, 'src/components/multi-select/index.ts'),
        'number-input': resolve(__dirname, 'src/components/number-input/index.ts'),
        'option-menu': resolve(__dirname, 'src/components/option-menu/index.ts'),
        'otp-input': resolve(__dirname, 'src/components/otp-input/index.ts'),
        pagination: resolve(__dirname, 'src/components/pagination/index.ts'),
        'progress-bar': resolve(__dirname, 'src/components/progress-bar/index.ts'),
        rating: resolve(__dirname, 'src/components/rating/index.ts'),
        'report-metrics-card': resolve(__dirname, 'src/components/report-metrics-card/index.ts'),
        'segmented-control': resolve(__dirname, 'src/components/segmented-control/index.ts'),
        'selection-toolbar': resolve(__dirname, 'src/components/selection-toolbar/index.ts'),
        sidebar: resolve(__dirname, 'src/components/sidebar/index.ts'),
        skeleton: resolve(__dirname, 'src/components/skeleton/index.ts'),
        slider: resolve(__dirname, 'src/components/slider/index.ts'),
        'speed-dial': resolve(__dirname, 'src/components/speed-dial/index.ts'),
        spinner: resolve(__dirname, 'src/components/spinner/index.ts'),
        'stat-card': resolve(__dirname, 'src/components/stat-card/index.ts'),
        stepper: resolve(__dirname, 'src/components/stepper/index.ts'),
        tabs: resolve(__dirname, 'src/components/tabs/index.ts'),
        'tags-input': resolve(__dirname, 'src/components/tags-input/index.ts'),
        'time-picker': resolve(__dirname, 'src/components/time-picker/index.ts'),
        typography: resolve(__dirname, 'src/components/typography/index.ts'),
        hooks: resolve(__dirname, 'src/hooks/index.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
        theme: resolve(__dirname, 'src/theme/index.ts'),
      },
      name: 'MangoUI',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return format === 'es' ? 'mango-ui-kit.js' : 'mango-ui-kit.cjs';
        }
        return `${entryName}/${format === 'es' ? 'index.js' : 'index.cjs'}`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        preserveModules: false,
      },
    },
    cssCodeSplit: true,
    sourcemap: true,
  },
});
