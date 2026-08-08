import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const CURSOR_OPTIONS = [
  { label: 'Default', value: 'default' },
  { label: 'Glow', value: 'glow' },
  { label: 'Trail', value: 'trail' },
  { label: 'Sparkle', value: 'sparkle' },
  { label: 'Orbit', value: 'orbit' },
];

export const CursorSelector = ({ onStyleChange, currentStyle = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left font-sans">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        aria-label="Select cursor style"
      >
        <Sparkles className="h-4 w-4 text-indigo-500" />
        <span className="capitalize">Cursor: {currentStyle}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            {CURSOR_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onStyleChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  currentStyle === option.value
                    ? 'bg-indigo-50 font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CursorSelector;