# StatCard 🥭

A component designed to display key metrics and statistics with optional trend indicators and icons.

## Features
- 📊 **Metric Display**: Clear labeling and value presentation.
- 📈 **Trend Indicators**: automatically show up/down arrows based on trend value.
- 🎨 **Multiple Variants**: Supports primary, secondary, success, warning, error, and info styles.
- 🔘 **Icon Support**: Pass any icon component to display next to the stats.

## Usage

```tsx
import { StatCard } from 'mango-ui-kit';
import { Users } from 'lucide-react';

<StatCard 
  label="Total Users" 
  value="12,430" 
  icon={Users} 
  trend={12.5} 
  trendLabel="from last month"
  variant="success"
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | The title or label of the statistic. |
| `value` | `string \| number` | - | The main value to display. |
| `icon` | `ComponentType<any>` | - | Optional icon component to display. |
| `trend` | `number` | - | Percentage change. Positive shows up arrow, negative shows down. |
| `trendLabel` | `string` | - | Descriptive text next to the trend (e.g., "vs last week"). |
| `variant` | `string` | `'primary'` | Visual style variant (`primary`, `success`, `error`, etc.). |
| `className` | `string` | - | Extra CSS classes for container. |
