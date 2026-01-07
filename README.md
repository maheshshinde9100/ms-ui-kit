# MS UI Kit

A lightweight and customizable React UI library with a set of accessible and reusable components to build modern web applications.

## Installation

To install the package, run the following command in your terminal:

```bash
npm install ms-ui-kit
```

## Usage

To use the components, import them from the `ms-ui-kit` package:

```jsx
import { Button, Card } from 'ms-ui-kit';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
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
```

## Components

### Button

A customizable button component with different variants and sizes.

#### Props

| Prop        | Type      | Default     | Description                                                  |
|-------------|-----------|-------------|--------------------------------------------------------------|
| `children`  | `node`    | `null`      | The content of the button.                                   |
| `variant`   | `string`  | `'primary'` | The variant of the button.                                   |
| `size`      | `string`  | `'md'`      | The size of the button.                                      |
| `disabled`  | `boolean` | `false`     | Whether the button is disabled.                              |
| `loading`   | `boolean` | `false`     | Whether the button is in a loading state.                    |
| `fullWidth` | `boolean` | `false`     | Whether the button should take up the full width of its parent.|
| `startIcon` | `node`    | `null`      | An icon to display at the start of the button.               |
| `endIcon`   | `node`    | `null`      | An icon to display at the end of the button.                 |
| `className` | `string`  | `''`        | Additional CSS classes to apply to the button.               |
| `onClick`   | `func`    | `null`      | The function to call when the button is clicked.             |

### Card

A flexible card container with multiple variants and layouts.

#### Props

| Prop        | Type      | Default     | Description                                             |
|-------------|-----------|-------------|---------------------------------------------------------|
| `children`  | `node`    | `null`      | The content of the card.                                |
| `variant`   | `string`  | `'default'` | The variant of the card.                                |
| `elevated`  | `boolean` | `true`      | Whether the card has a shadow and elevation.            |
| `bordered`  | `boolean` | `true`      | Whether the card has a border.                          |
| `rounded`   | `boolean` | `true`      | Whether the card has rounded corners.                   |
| `hoverable` | `boolean` | `false`     | Whether the card has a hover effect.                    |
| `className` | `string`  | `''`        | Additional CSS classes to apply to the card.            |
| `width`     | `string`  | `'auto'`    | The width of the card.                                  |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on our [GitHub repository]([https://github.com/your-username/ms-ui-kit](https://github.com/maheshshinde9100/ms-ui-kit)).

## License

This project is licensed under the MIT License.
