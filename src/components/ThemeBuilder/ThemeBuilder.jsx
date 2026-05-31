import ThemeControls from "./ThemeControls";
import ThemePreview from "./ThemePreview";
import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
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
  const updateTheme = useCallback((key, value) => {
  setTheme((prev) => ({
    ...prev,
    [key]: value,
  }));
}, []);

  const resetTheme = useCallback(() => {
  setTheme(DEFAULT_THEME);
}, []);
  const exportTheme = async () => {
  await navigator.clipboard.writeText(generatedCode);

  if (onExport) {
    onExport(theme);
  }
};
  const applyPreset = useCallback((preset) => {
  setTheme(THEME_PRESETS[preset]);
}, []);
  
  const handleModeToggle = () => {
  updateTheme(
    'mode',
    theme.mode === 'light' ? 'dark' : 'light'
  );
};


const shadowMap = useMemo(
  () => ({
    0: 'none',
    1: '0 1px 3px rgba(0,0,0,0.1)',
    2: '0 4px 6px rgba(0,0,0,0.1)',
    3: '0 10px 15px rgba(0,0,0,0.15)',
    4: '0 20px 25px rgba(0,0,0,0.2)',
    5: '0 25px 50px rgba(0,0,0,0.25)',
  }),
  []
);
const generatedCode = `const customTheme = ${JSON.stringify(
  theme,
  null,
  2
)};`;

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
<ThemeControls
  theme={theme}
  updateTheme={updateTheme}
  handleModeToggle={handleModeToggle}
  generatedCode={generatedCode}
  exportTheme={exportTheme}
  resetTheme={resetTheme}
/>
     
      <ThemePreview
  theme={theme}
  shadowMap={shadowMap}
  isPreviewModalOpen={isPreviewModalOpen}
  setIsPreviewModalOpen={setIsPreviewModalOpen}
/>

    </div>
  
    
    
  );
};


export default ThemeBuilder;
