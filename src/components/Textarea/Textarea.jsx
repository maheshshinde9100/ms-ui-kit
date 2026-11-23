import React from 'react';

const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  helpText,
  rows = 4,
  className = '',
}) => {
  const baseClasses = `
    w-full px-4 py-3 rounded-xl
    bg-surface 
    border transition-[border-color,box-shadow] duration-200
    focus:outline-none focus:ring-4
    text-ink text-sm
    placeholder:text-faint
    disabled:opacity-50 disabled:cursor-not-allowed
    resize-y min-h-[100px]
  `;

  // Determine state classes based on error and disabled
  let stateClasses = 'border-line hover:border-line-strong focus:border-accent focus:ring-accent-soft';
  if (error) {
    stateClasses = 'border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500/15';
  }

  return (
    <div className={`space-y-2 w-full flex flex-col ${className}`}>
      {label && (
        <label className={`text-[13px] font-medium ${error ? 'text-red-500' : 'text-ink-soft'}`}>
          {label}
        </label>
      )}
      <textarea
        className={`${baseClasses} ${stateClasses}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
      />
      {helpText && (
        <p className={`text-xs ${error ? 'text-red-500' : 'text-ink-soft'}`}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default Textarea;
