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
      <span className="relative mt-0.5 flex h-5 items-center">
        <input
          type="checkbox"
          className="peer m-0 h-[18px] w-[18px] appearance-none rounded-[5px] border border-line-strong bg-surface transition-colors duration-200 checked:border-accent checked:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:bg-surface-2"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <svg
          className="pointer-events-none absolute left-[3px] top-[3px] h-3 w-3 scale-50 text-white opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100"
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
      </span>
      <span>
        {label && <span className={`block text-[13px] font-medium ${error ? 'text-red-500' : 'text-ink'}`}>{label}</span>}
        {description && <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">{description}</span>}
      </span>
    </label>
  );
};

export default Checkbox;
