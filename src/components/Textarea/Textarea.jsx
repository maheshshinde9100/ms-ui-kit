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
    bg-white dark:bg-gray-900 
    border-2 transition-all duration-300
    focus:outline-none focus:ring-4
    text-gray-900 dark:text-white
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    disabled:opacity-50 disabled:cursor-not-allowed
    resize-y min-h-[100px]
  `;

  // Determine state classes based on error and disabled
  let stateClasses = 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 focus:border-blue-500 focus:ring-blue-500/20';
  if (error) {
    stateClasses = 'border-red-500 hover:border-red-600 focus:border-red-500 focus:ring-red-500/20';
  }

  return (
    <div className={`space-y-2 w-full flex flex-col ${className}`}>
      {label && (
        <label className={`text-sm font-bold ${error ? 'text-red-500' : 'text-gray-900 dark:text-white'}`}>
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
        <p className={`text-xs font-medium ${error ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
          {helpText}
        </p>
      )}
    </div>
  );
};

export default Textarea;
