import React from "react";

const ThemeControls = React.memo(
  ({
    theme,
    updateTheme,
    handleModeToggle,
    generatedCode,
    exportTheme,
    resetTheme,
  }) => {
    return (
      <div>
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
  className="w-full border rounded-lg px-3 py-2 bg-gray-900 text-white border-gray-700"
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
    className="w-full border rounded-lg px-3 py-2 bg-gray-900 text-white border-gray-700"
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
          <div className="mt-6">
  <label className="block mb-2 font-medium">
    Generated Theme Code
  </label>

  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
    <code>{generatedCode}</code>
  </pre>

  <button
    onClick={() =>
      navigator.clipboard.writeText(generatedCode)
    }
    className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white"
  >
    Copy Code
  </button>
</div>
  <button
    onClick={exportTheme}
    className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
  >
    Copy Theme Code
  </button>

  <button
    onClick={resetTheme}
    className="px-4 py-2 rounded-lg bg-red-500 text-white"
  >
    Reset to Default
  </button>
</div>
      </div>
      </div>
    );
  }
);

export default ThemeControls;