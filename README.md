# MS UI Kit

**MS UI Kit** is a lightweight and customizable React UI component library designed to help developers quickly build modern web applications using reusable and accessible components.

Built with **React, Vite, and TailwindCSS**, the library provides clean, modular UI components that are easy to integrate into any React project.

---

## 📦 Installation

Install the package from npm:

```bash
npm install ms-ui-kit
```

---

## 🚀 Quick Start

Import the components you need from the library.

```jsx
import { Button, Card } from "ms-ui-kit";

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>

      <Card>
        <Card.Header>Card Title</Card.Header>
        <Card.Body>
          <p>This is the card body.</p>
        </Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
```

---

## 🧩 Available Components

Currently included in **v0.1.0**:

* Button
* Card
* Modal
* Navbar
* Input
* Avatar
* Badge
* Spinner
* Switch
* Alert
* Accordion

More components will be added in future releases.

---

## 🎨 Button Component

A flexible button component with support for variants, icons, loading states, and sizes.

### Props

| Prop        | Type     | Default   | Description          |
| ----------- | -------- | --------- | -------------------- |
| `children`  | node     | —         | Button content       |
| `variant`   | string   | `primary` | Button style variant |
| `size`      | string   | `md`      | Button size          |
| `disabled`  | boolean  | `false`   | Disable button       |
| `loading`   | boolean  | `false`   | Show loading state   |
| `fullWidth` | boolean  | `false`   | Full width button    |
| `startIcon` | node     | —         | Icon before text     |
| `endIcon`   | node     | —         | Icon after text      |
| `className` | string   | `""`      | Custom CSS classes   |
| `onClick`   | function | —         | Click handler        |

---

## 🧱 Card Component

A flexible container component used to display grouped content.

### Props

| Prop        | Type    | Default   | Description        |
| ----------- | ------- | --------- | ------------------ |
| `children`  | node    | —         | Card content       |
| `variant`   | string  | `default` | Card style         |
| `elevated`  | boolean | `true`    | Adds shadow        |
| `bordered`  | boolean | `true`    | Adds border        |
| `rounded`   | boolean | `true`    | Rounded corners    |
| `hoverable` | boolean | `false`   | Hover animation    |
| `className` | string  | `""`      | Custom CSS classes |
| `width`     | string  | `auto`    | Card width         |

---

## 📈 Version

Current version:

```
ms-ui-kit@0.1.0
```

This is the **initial release** containing core UI components.

Future versions will introduce:

* More UI components
* Improved styling
* Better accessibility
* Performance optimizations

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve this library:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

GitHub Repository:

https://github.com/maheshshinde9100/ms-ui-kit

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Mahesh Shinde**

Computer Engineering Student | Full Stack Developer

GitHub:
https://github.com/maheshshinde9100
