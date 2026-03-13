import React from 'react';

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  error = false,
  description,
  className = ''
}) => {
  return (
    <label className={`relative flex items-start gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div className="flex items-center h-5 mt-0.5">
        <input
          type="checkbox"
          className="peer mt-0 appearance-none w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:bg-gray-100 dark:disabled:bg-gray-800"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <svg
          className="absolute top-[3px] left-[3px] w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 peer-checked:scale-100 scale-50 transition-all duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        {label && <span className={`text-sm font-bold ${error ? 'text-red-500' : 'text-gray-900 dark:text-white'}`}>{label}</span>}
        {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
      </div>
    </label>
  );
};

export default Checkbox;
