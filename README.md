# MS UI Kit

**MS UI Kit** is a premium, lightweight, and highly customizable React UI component library. Designed with a focus on modern aesthetics — glassmorphism, smooth Framer Motion animations, and a robust global theme system — it gives you everything you need to build stunning interfaces fast.

Built with **React, Vite, and Tailwind CSS**.

[![npm version](https://img.shields.io/npm/v/ms-ui-kit?color=6366f1&label=npm)](https://www.npmjs.com/package/ms-ui-kit)
[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-maheshshinde9100%2Fms--ui--kit-blue?logo=github)](https://github.com/maheshshinde9100/ms-ui-kit)

---

## Key Features

- **Global Light/Dark Mode** — Full theme management via React Context with a one-line setup
- **Framer Motion Animations** — Spring animations, staggered reveals, and micro-interactions on every component
- **Premium Variants** — `glass`, `premium`, and `gradient` styles for high-end dashboards
- **Command Palette** — Keyboard-driven `Ctrl+K` search overlay, like VS Code or Linear
- **Date Picker** — Custom-designed, animated calendar with smooth month transitions
- **File Upload** — Drag-and-drop zone with progress animation
- **Data Table** — Sortable, filterable table with paginated rows
- **Toast Notifications** — Stacked, auto-dismissing toasts with rich variants
- **Drawer** — Slide-in side panel overlay
- **Responsive Design** — Mobile-first components that look great on any screen

---

## Installation

```bash
npm install ms-ui-kit
```

> **Peer dependencies** — make sure your project already has these:
> ```bash
> npm install react react-dom
> ```

---

## Quick Start

Wrap your application in `ThemeProvider` to enable global theme management across all components.

```jsx
import React from 'react';
import { ThemeProvider, Button, ThemeToggle } from 'ms-ui-kit';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        <nav className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold dark:text-white">My App</h1>
          <ThemeToggle />
        </nav>

        <main className="p-8">
          <Button variant="premium">Premium Action</Button>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

---

## Available Components — v0.3.0

| Category | Components |
|---|---|
| **Navigation** | Navbar, Breadcrumb, Pagination, Tabs, ThemeToggle, CommandPalette |
| **Buttons & Forms** | Button, Input, Checkbox, Switch, Textarea, Dropdown, DatePicker, FileUpload |
| **Data Display** | Card, Avatar, Badge, Tag, Timeline, Rating, Stepper, EmptyState, DataTable |
| **Feedback** | Alert, Modal, Tooltip, Spinner, Skeleton, Progress, Accordion, Toast |
| **Overlays** | Drawer |

---

## Component Highlights

### ThemeToggle + ThemeProvider
Drop-in dark/light mode toggle powered by React Context. Persists preference and applies it globally.
```jsx
import { ThemeProvider, ThemeToggle } from 'ms-ui-kit';

<ThemeProvider>
  <ThemeToggle />
</ThemeProvider>
```

### Button
Supports `primary`, `premium`, `outline`, `ghost`, and `danger` variants with icon support.
```jsx
import { Button } from 'ms-ui-kit';
import { Zap } from 'lucide-react';

<Button variant="premium" startIcon={<Zap />}>Upgrade Now</Button>
```

### Card (Glass Variant)
Use `variant="glass"` for modern glassmorphism UI.
```jsx
import { Card } from 'ms-ui-kit';

<Card variant="glass" hoverable>
  <Card.Header>Premium Project</Card.Header>
  <Card.Body>Content with backdrop blur effect.</Card.Body>
</Card>
```

### CommandPalette
Keyboard-driven command search overlay. Triggered by `Ctrl+K`.
```jsx
import { CommandPalette } from 'ms-ui-kit';

const commands = [
  { id: 'home', label: 'Go to Home', icon: <Home />, action: () => navigate('/') },
  { id: 'settings', label: 'Open Settings', icon: <Settings />, action: () => navigate('/settings') },
];

<CommandPalette commands={commands} />
```

### DatePicker
Animated calendar with month navigation and controlled/uncontrolled modes.
```jsx
import { DatePicker } from 'ms-ui-kit';

<DatePicker
  label="Pick a date"
  value={date}
  onChange={(newDate) => setDate(newDate)}
/>
```

### Toast
Auto-dismissing stacked notifications with `success`, `error`, `warning`, and `info` variants.
```jsx
import { useToast, ToastContainer } from 'ms-ui-kit';

function App() {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <>
      <button onClick={() => addToast({ type: 'success', message: 'Saved!' })}>
        Show Toast
      </button>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}
```

### Drawer
Slide-in overlay panel for mobile menus, settings panels, and detail views.
```jsx
import { Drawer } from 'ms-ui-kit';

<Drawer isOpen={open} onClose={() => setOpen(false)} title="Settings">
  <p>Drawer content here...</p>
</Drawer>
```

### FileUpload
Drag-and-drop file upload zone with animated progress feedback.
```jsx
import { FileUpload } from 'ms-ui-kit';

<FileUpload
  onFileSelect={(files) => console.log(files)}
  accept="image/*"
  multiple
/>
```

### DataTable
Sortable, filterable data table with pagination.
```jsx
import { DataTable } from 'ms-ui-kit';

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
];

<DataTable columns={columns} data={rows} pageSize={10} />
```

---

## Changelog

### v0.3.0 — May 15, 2026 _(Latest)_
- **feat**: Added `CommandPalette` — keyboard-driven `Ctrl+K` search overlay
- **feat**: Added `DatePicker` — custom animated calendar component
- **feat**: Added `FileUpload` — drag-and-drop file upload with progress
- **feat**: Added `DataTable` — sortable, filterable data table with pagination
- **feat**: Added `Toast` / `useToast` — stacked notification system
- **feat**: Added `Drawer` — slide-in side panel overlay
- **feat**: Full global `light/dark mode` support via `ThemeProvider` + `ThemeToggle`
- **style**: Enhanced `ThemeToggle` with spring animations and vibrant colors
- **ci**: Added GitHub Actions workflow for lint and build checks
- **fix**: Resolved linting errors in `CommandPalette`, `DataTable`, and `Toast`
- **fix**: Resolved Vite config issues for library build

### v0.2.0 — March 15, 2026
- **feat**: Added `Footer` component
- **feat**: Updated logo and improved component showcase dashboard
- **fix**: Conditional `build.lib` for Vercel deployment compatibility
- **fix**: Updated `vercel.json` rewrites for SPA routing

### v0.1.0 — Initial Release
- Core components: Button, Input, Card, Modal, Avatar, Badge, Alert, Tooltip, Spinner, Skeleton, Progress, Accordion, Tabs, Navbar, Breadcrumb, Pagination, Checkbox, Switch, Textarea, Dropdown, Tag, Timeline, Rating, Stepper, EmptyState

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push and submit a pull request

**GitHub Repository:** [maheshshinde9100/ms-ui-kit](https://github.com/maheshshinde9100/ms-ui-kit)

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## Author

**Mahesh Shinde**
*Computer Engineering Student | Full Stack Developer*

GitHub: [@maheshshinde9100](https://github.com/maheshshinde9100)
