# MS UI Kit 🚀

**MS UI Kit** is a premium, lightweight, and highly customizable React UI component library. It is designed with a focus on modern aesthetics—incorporating glassmorphism, smooth Framer Motion animations, and a robust global theme system.

Built with **React, Vite, and Tailwind CSS**, the library provides clean, modular UI components that are easy to integrate into any professional React project.

---

## ✨ Key Features

*   🌓 **Global Theme Management**: Full dark/light mode support out of the box using React Context.
*   🎭 **Smooth Animations**: Powered by Framer Motion for a premium user experience.
*   💎 **Premium Variants**: Specialized styles like "Glass" and "Premium" for high-end dashboards.
*   📱 **Responsive Design**: Mobile-first components that look great on any screen.
*   🛠️ **Easy Integration**: Built to work seamlessly with Tailwind CSS.

---

## 📦 Installation

Install the package from npm:

```bash
npm install ms-ui-kit
```

---

## 🚀 Quick Start

Wrap your application in the `ThemeProvider` to enable global theme management.

```jsx
import React from 'react';
import { ThemeProvider, Button, ThemeToggle } from "ms-ui-kit";

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

## 🧩 Available Components

Currently included in **v0.2.0**:

*   **Navigation**: Navbar, Breadcrumb, Pagination, Tabs, ThemeToggle
*   **Buttons & Forms**: Button, Input, Checkbox, Switch, Textarea, Dropdown
*   **Data Display**: Card, Avatar, Badge, Tag, Timeline, Rating, Stepper, EmptyState
*   **Feedback**: Alert, Modal, Tooltip, Spinner, Skeleton, Progress, Accordion

---

## 🎨 Component Highlights

### Button Component
Supports multiple variants including `primary`, `premium`, `outline`, `ghost`, and `danger`.
```jsx
<Button variant="premium" startIcon={<Zap />}>
  Upgrade Now
</Button>
```

### Card Component
Includes a new `glass` variant for modern "Glassmorphism" designs.
```jsx
<Card variant="glass" hoverable>
  <Card.Header>Premium Project</Card.Header>
  <Card.Body>Content with backdrop blur effect.</Card.Body>
</Card>
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this library:

1.  Fork the repository
2.  Create a feature branch
3.  Submit a pull request

GitHub Repository: [maheshshinde9100/ms-ui-kit](https://github.com/maheshshinde9100/ms-ui-kit)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Mahesh Shinde**  
*Computer Engineering Student | Full Stack Developer*

GitHub: [@maheshshinde9100](https://github.com/maheshshinde9100)
