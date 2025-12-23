import React from 'react';

/**
 * ms-ui-kit Switch Component
 * A premium toggle switch component
 */
const Switch = ({
    checked,
    onChange,
    label,
    variant = 'primary', // primary, success, danger
    size = 'md', // sm, md, lg
    disabled = false,
    className = '',
    ...props
}) => {
    const sizes = {
        sm: { track: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
        md: { track: 'w-11 h-6', thumb: 'w-4 h-4', translate: 'translate-x-5' },
        lg: { track: 'w-14 h-8', thumb: 'w-6 h-6', translate: 'translate-x-6' },
    };

    const variants = {
        primary: 'bg-blue-600',
        success: 'bg-emerald-600',
        danger: 'bg-red-600',
    };

    return (
        <label className={`inline-flex items-center cursor-pointer select-none group ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={(e) => !disabled && onChange && onChange(e.target.checked)}
                    disabled={disabled}
                    {...props}
                />

                {/* Track */}
                <div
                    className={`
            ${sizes[size].track} 
            rounded-full transition-colors duration-300 ease-in-out
            ${checked ? variants[variant] : 'bg-gray-200 dark:bg-gray-700'}
            group-hover:ring-4 ring-blue-500/10
          `}
                />

                {/* Thumb */}
                <div
                    className={`
            ${sizes[size].thumb}
            absolute left-1 top-1
            bg-white rounded-full 
            shadow-md transition-transform duration-300 ease-in-out
            ${checked ? sizes[size].translate : 'translate-x-0'}
          `}
                />
            </div>

            {label && (
                <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </span>
            )}
        </label>
    );
};

export default Switch;
