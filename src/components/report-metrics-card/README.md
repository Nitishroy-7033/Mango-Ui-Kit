# ReportMetricsCard

A premium, data-driven card component designed for dashboards and analytics reports. It supports metrics, trends, sparkline charts, and highly granular visibility controls.

## ✨ Features

- **📈 Internal Sparklines**: Built-in SVG sparkline generator for trend visualization without heavy chart libraries.
- **🚦 Smart Trends**: High-contrast color coding and icons for positive, negative, and neutral trends.
- **👁️ Granular Visibility**: Use the `show` prop to toggle any part of the card (title, value, chart, etc.).
- **🎨 Themed & Responsive**: Fully supports dark mode and adapts its layout to the container size.
- **⚙️ Actionable**: Integrated options menu and footer action buttons.

---

## 📦 Installation

```tsx
import { ReportMetricsCard } from 'mango-ui-kit';
import { Eye } from 'lucide-react';
```

---

## 🚀 Usage

### Basic Analytics Card
```tsx
<ReportMetricsCard
  title="Page Views"
  value="12,500"
  trend={12}
  comparisonText="vs last 7 days"
  chartData={[10, 20, 15, 30, 25, 45, 40]}
  icon={<Eye size={20} />}
  footerActionLabel="View report"
/>
```

### Hiding Specific Data (Show/Ignore)
```tsx
<ReportMetricsCard
  title="Revenue"
  value="$1,200"
  show={{
    title: true,
    value: true,
    trend: false,      // Ignore trend
    chart: true,
    footer: false      // Hide footer
  }}
/>
```

---

## 📊 Sample Data

Use these data structures to populate your dashboard:

```json
[
  {
    "title": "Total Revenue",
    "value": "$45,231",
    "trend": 12.5,
    "comparisonText": "vs last month",
    "chartData": [25, 45, 30, 60, 45, 80, 75]
  },
  {
    "title": "New Subscribers",
    "value": "1,240",
    "trend": 8.1,
    "comparisonText": "vs yesterday",
    "chartData": [10, 15, 12, 18, 14, 25, 20]
  },
  {
    "title": "Bounce Rate",
    "value": "24.8%",
    "trend": -2.4,
    "comparisonText": "Improvement of 2%",
    "chartData": [40, 35, 45, 30, 35, 25, 28]
  }
]
```

---

## 🛠 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | — | Label for the metric |
| `value` | `string \| number` | — | The main numeric or text data |
| `trend` | `number` | — | Percentage change |
| `trendDirection` | `'up' \| 'down'` | `'up'` | Color/icon logic |
| `chartData` | `number[]` | — | Array of numbers for the sparkline |
| `show` | `object` | `all: true` | Map to ignore/show specific fields |
| `footerActionLabel`| `string` | — | Text for the bottom action button |
| `onFooterAction` | `function` | — | Click handler for footer |
| `onOptionsClick` | `function` | — | Click handler for the ellipsis menu |
