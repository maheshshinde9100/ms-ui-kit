import React from "react";
import {
  Button,
  Card,
  Input,
  Badge,
  Progress,
  Switch,
  Modal,
  Navbar,
} from "../index";

const ThemePreview = ({
  theme,
  shadowMap,
  isPreviewModalOpen,
  setIsPreviewModalOpen,
}) => {
  const previewStyle = {
    background: theme.background,
    color: theme.text,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
    fontSize: `${16 * (theme.fontSizeScale / 100)}px`,
    borderRadius: `${theme.borderRadius}px`,
  };

  return (
    <>
      <div className="mt-10">
  <h3 className="text-xl font-bold mb-4">
    Live Preview
  </h3>

  <div
  className="p-6 border rounded-2xl space-y-6"
  style={{
    ...previewStyle,
    boxShadow: shadowMap[theme.shadowIntensity],
    backdropFilter: `blur(${theme.glassIntensity / 10}px)`,
    border: `1px solid ${theme.secondary}`,
    padding: `${theme.spacingScale / 2}px`,
    transition: 'all ease',
    transitionDuration: `${theme.animationSpeed}s`,
  }}
>
    <Navbar
  logo="MS UI"
  links={[
    { label: 'Home', href: '#' },
    { label: 'Docs', href: '#' },
  ]}
/>
    <div className="flex flex-wrap gap-3">
  <Button
    style={{
      background: theme.primary,
      borderColor: theme.primary,
    }}
  >
    Primary Button
  </Button>

  <Button
    style={{
      background: theme.secondary,
      borderColor: theme.secondary,
    }}
  >
    Secondary Button
  </Button>
</div>

    <Card
  className="p-4"
  style={{
    background: theme.surface,
    color: theme.text,
    borderRadius: `${theme.borderRadius}px`,
  }}
>
      <h4 className="font-bold mb-2">
        Preview Card
      </h4>

      <p>
        Theme preview content.
      </p>
    </Card>

    <Input
      label="Preview Input"
      placeholder="Type something..."
    />

    <div className="flex gap-2 flex-wrap">
  <Badge
    style={{
      background: theme.success,
      color: '#fff',
    }}
  >
    Success
  </Badge>

  <Badge
    style={{
      background: theme.warning,
      color: '#fff',
    }}
  >
    Warning
  </Badge>

  <Badge
    style={{
      background: theme.danger,
      color: '#fff',
    }}
  >
    Danger
  </Badge>
</div>
    <Button
  onClick={() =>
    setIsPreviewModalOpen(true)
  }
>
  Open Preview Modal
</Button>
    <div
  style={{
    background: theme.surface,
    color: theme.text,
    border: `1px solid ${theme.primary}`,
    padding: '12px',
    borderRadius: `${theme.borderRadius}px`,
  }}
>
  Theme Preview Alert
</div>

<Progress value={75} />

<Switch
  checked={true}
  onChange={() => {}}
  label="Preview Switch"
/>
  </div>
</div>

<Modal
  isOpen={isPreviewModalOpen}
  onClose={() =>
    setIsPreviewModalOpen(false)
  }
  title="Theme Preview Modal"
  style={{
    background: theme.surface,
    color: theme.text,
    borderRadius: `${theme.borderRadius}px`,
    boxShadow: shadowMap[theme.shadowIntensity],
    backdropFilter: `blur(${theme.glassIntensity / 10}px)`,
    border: `1px solid ${theme.secondary}`,
    transitionDuration: `${theme.animationSpeed}s`,
  }}
>
  <div className="space-y-3">
    <p>
      This modal updates with the current
      theme settings.
    </p>

    <Button>
      Modal Action
    </Button>
  </div>
</Modal>
    </>
  );
};

export default React.memo(ThemePreview);