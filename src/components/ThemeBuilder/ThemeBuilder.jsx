import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Badge,
  Progress,
  Switch,
  Modal,
  Navbar,
} from '../index';

const DEFAULT_THEME = {
  mode: 'light',

  primary: '#3b82f6',
  secondary: '#64748b',

  background: '#ffffff',
  surface: '#f8fafc',
  text: '#111827',

  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',

  fontFamily: 'Inter',
  fontSizeScale: 100,
  fontWeight: 400,

  borderRadius: 12,
  spacingScale: 100,

  shadowIntensity: 2,
  glassIntensity: 30,
  animationSpeed: 1,
};
const THEME_PRESETS = {
  modern: {
    ...DEFAULT_THEME,
    primary: '#3b82f6',
    secondary: '#64748b',
    background: '#ffffff',
    surface: '#f8fafc',
  },

  darkPro: {
    ...DEFAULT_THEME,
    mode: 'dark',
    primary: '#6366f1',
    secondary: '#94a3b8',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f8fafc',
  },

  glass: {
    ...DEFAULT_THEME,
    primary: '#8b5cf6',
    secondary: '#06b6d4',
    glassIntensity: 80,
    shadowIntensity: 4,
  },
};

const ThemeBuilder = ({
  defaultTheme = DEFAULT_THEME,
  onExport,
}) => {
  const [theme, setTheme] = useState(defaultTheme);
const [isPreviewModalOpen, setIsPreviewModalOpen] =
  useState(false);
  const updateTheme = (key, value) => {
    setTheme((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetTheme = () => {
    setTheme(DEFAULT_THEME);
  };
  const exportTheme = async () => {
  const json = JSON.stringify(theme, null, 2);

  await navigator.clipboard.writeText(json);

  const blob = new Blob([json], {
    type: 'application/json',
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'theme.json';
  a.click();

  URL.revokeObjectURL(url);

  if (onExport) {
    onExport(theme);
  }
};
  const applyPreset = (preset) => {
  setTheme(THEME_PRESETS[preset]);
};
  
  const handleModeToggle = () => {
  updateTheme(
    'mode',
    theme.mode === 'light' ? 'dark' : 'light'
  );
};
const previewStyle = {
  background: theme.background,
  color: theme.text,
  fontFamily: theme.fontFamily,
  fontWeight: theme.fontWeight,
  fontSize: `${16 * (theme.fontSizeScale / 100)}px`,
  borderRadius: `${theme.borderRadius}px`,
};

const shadowMap = {
  0: 'none',
  1: '0 1px 3px rgba(0,0,0,0.1)',
  2: '0 4px 6px rgba(0,0,0,0.1)',
  3: '0 10px 15px rgba(0,0,0,0.15)',
  4: '0 20px 25px rgba(0,0,0,0.2)',
  5: '0 25px 50px rgba(0,0,0,0.25)',
};

  return (
    <div className="w-full p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-6">
        Theme Builder
      </h2>
      <div>
  <label className="block mb-3 font-medium">
    Theme Presets
  </label>

  <div className="flex flex-wrap gap-3">
    <button
      onClick={() => applyPreset('modern')}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white"
    >
      Modern
    </button>

    <button
      onClick={() => applyPreset('darkPro')}
      className="px-4 py-2 rounded-lg bg-slate-800 text-white"
    >
      Dark Pro
    </button>

    <button
      onClick={() => applyPreset('glass')}
      className="px-4 py-2 rounded-lg bg-purple-600 text-white"
    >
      Glass
    </button>
  </div>
</div>

      <div className="space-y-6">
       <div>
  <label className="block mb-2 font-medium">
    Theme Mode
  </label>

  <button
    onClick={handleModeToggle}
    className="px-4 py-2 rounded-lg bg-blue-500 text-white"
  >
    {theme.mode === 'light'
      ? 'Switch to Dark'
      : 'Switch to Light'}
  </button>
</div>

<div>
  <label className="block mb-2 font-medium">
    Font Family
  </label>

  <select
    value={theme.fontFamily}
    onChange={(e) =>
      updateTheme('fontFamily', e.target.value)
    }
    className="w-full border rounded-lg px-3 py-2"
  >
    <option value="Inter">Inter</option>
    <option value="Arial">Arial</option>
    <option value="Verdana">Verdana</option>
    <option value="Georgia">Georgia</option>
    <option value="monospace">Monospace</option>
  </select>
</div>
<div>
  <label className="block mb-2 font-medium">
    Font Size Scale
  </label>

  <input
    type="range"
    min="80"
    max="150"
    value={theme.fontSizeScale}
    onChange={(e) =>
      updateTheme(
        'fontSizeScale',
        Number(e.target.value)
      )
    }
    className="w-full"
  />

  <p className="text-sm mt-1">
    {theme.fontSizeScale}%
  </p>
</div>

<div>
  <label className="block mb-2 font-medium">
    Font Weight
  </label>

  <select
    value={theme.fontWeight}
    onChange={(e) =>
      updateTheme(
        'fontWeight',
        Number(e.target.value)
      )
    }
    className="w-full border rounded-lg px-3 py-2"
  >
    <option value={300}>Light</option>
    <option value={400}>Regular</option>
    <option value={500}>Medium</option>
    <option value={600}>Semi Bold</option>
    <option value={700}>Bold</option>
  </select>
</div>
<div>
  <label className="block mb-2 font-medium">
    Border Radius
  </label>

  <input
    type="range"
    min="0"
    max="32"
    value={theme.borderRadius}
    onChange={(e) =>
      updateTheme(
        'borderRadius',
        Number(e.target.value)
      )
    }
    className="w-full"
  />

  <p className="text-sm mt-1">
    {theme.borderRadius}px
  </p>
</div>
<div>
  <label className="block mb-2 font-medium">
    Spacing Scale
  </label>

  <input
    type="range"
    min="80"
    max="150"
    value={theme.spacingScale}
    onChange={(e) =>
      updateTheme(
        'spacingScale',
        Number(e.target.value)
      )
    }
    className="w-full"
  />

  <p className="text-sm mt-1">
    {theme.spacingScale}%
  </p>
</div>
<div>
  <label className="block mb-2 font-medium">
    Shadow Intensity
  </label>

  <input
    type="range"
    min="0"
    max="5"
    value={theme.shadowIntensity}
    onChange={(e) =>
      updateTheme(
        'shadowIntensity',
        Number(e.target.value)
      )
    }
    className="w-full"
  />

  <p className="text-sm mt-1">
    {theme.shadowIntensity}
  </p>
</div>
<div>
  <label className="block mb-2 font-medium">
    Glass Effect
  </label>

  <input
    type="range"
    min="0"
    max="100"
    value={theme.glassIntensity}
    onChange={(e) =>
      updateTheme(
        'glassIntensity',
        Number(e.target.value)
      )
    }
    className="w-full"
  />

  <p className="text-sm mt-1">
    {theme.glassIntensity}%
  </p>
</div>
<div>
  <label className="block mb-2 font-medium">
    Animation Speed
  </label>

  <input
    type="range"
    min="0.5"
    max="3"
    step="0.1"
    value={theme.animationSpeed}
    onChange={(e) =>
      updateTheme(
        'animationSpeed',
        Number(e.target.value)
      )
    }
    className="w-full"
  />

  <p className="text-sm mt-1">
    {theme.animationSpeed}x
  </p>
</div>
        <div>
          <label className="block mb-2 font-medium">
            Primary Color
          </label>

          <input
            type="color"
            value={theme.primary}
            onChange={(e) =>
              updateTheme('primary', e.target.value)
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Secondary Color
          </label>

          <input
            type="color"
            value={theme.secondary}
            onChange={(e) =>
              updateTheme('secondary', e.target.value)
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Background Color
          </label>

          <input
            type="color"
            value={theme.background}
            onChange={(e) =>
              updateTheme('background', e.target.value)
            }
          />
        </div>
        <div>
  <label className="block mb-2 font-medium">
    Surface Color
  </label>

  <input
    type="color"
    value={theme.surface}
    onChange={(e) =>
      updateTheme('surface', e.target.value)
    }
  />
</div>

<div>
  <label className="block mb-2 font-medium">
    Text Color
  </label>

  <input
    type="color"
    value={theme.text}
    onChange={(e) =>
      updateTheme('text', e.target.value)
    }
  />
</div>

<div>
  <label className="block mb-2 font-medium">
    Success Color
  </label>

  <input
    type="color"
    value={theme.success}
    onChange={(e) =>
      updateTheme('success', e.target.value)
    }
  />
</div>

<div>
  <label className="block mb-2 font-medium">
    Warning Color
  </label>

  <input
    type="color"
    value={theme.warning}
    onChange={(e) =>
      updateTheme('warning', e.target.value)
    }
  />
</div>

<div>
  <label className="block mb-2 font-medium">
    Danger Color
  </label>

  <input
    type="color"
    value={theme.danger}
    onChange={(e) =>
      updateTheme('danger', e.target.value)
    }
  />
</div>

        <div className="flex gap-3">
  <button
    onClick={exportTheme}
    className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
  >
    Export Theme
  </button>

  <button
    onClick={resetTheme}
    className="px-4 py-2 rounded-lg bg-red-500 text-white"
  >
    Reset to Default
  </button>
</div>
      </div>
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

    </div>
    
    
  );
};


export default ThemeBuilder;
