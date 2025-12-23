import React, { useId } from 'react';

/**
 * ms-ui-kit Input Component
 * A premium input field with multiple variants and states
 */
const Input = ({
    label,
    error,
    helpText,
    variant = 'outline', // outline, filled, glass
    size = 'md', // sm, md, lg
    startIcon,
    endIcon,
    className = '',
    id,
    fullWidth = true,
    ...props
}) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    // Size configurations
    const sizes = {
        sm: 'px-3 py-1.5 text-sm rounded-lg',
        md: 'px-4 py-2.5 text-base rounded-xl',
        lg: 'px-5 py-3.5 text-lg rounded-2xl',
    };

    // Variant styles
    const variants = {
        outline: `
      bg-white dark:bg-gray-900 
      border-2 border-gray-200 dark:border-gray-700 
      hover:border-gray-300 dark:hover:border-gray-600
      focus:border-blue-500 dark:focus:border-blue-400
      focus:ring-4 focus:ring-blue-500/10
    `,
        filled: `
      bg-gray-100 dark:bg-gray-800 
      border-2 border-transparent
      hover:bg-gray-200 dark:hover:bg-gray-700
      focus:bg-white dark:focus:bg-gray-900
      focus:border-blue-500 dark:focus:border-blue-400
      focus:ring-4 focus:ring-blue-500/10
    `,
        glass: `
      bg-white/10 dark:bg-gray-900/20 
      backdrop-blur-md
      border-2 border-white/20 dark:border-gray-700/30
      hover:border-white/30 dark:hover:border-gray-600/40
      focus:border-blue-400/50 dark:focus:border-blue-400/30
      focus:bg-white/20 dark:focus:bg-gray-900/30
      focus:ring-4 focus:ring-blue-400/20
    `
    };

    // Error state styles
    const errorStyles = error
        ? '!border-red-500 focus:!ring-red-500/10 dark:!border-red-500/50'
        : '';

    return (
        <div className={`${fullWidth ? 'w-full' : 'w-auto'} mb-4 ${className}`}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1 transition-colors"
                >
                    {label}
                </label>
            )}

            <div className="relative group">
                {/* Start Icon */}
                {startIcon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        {startIcon}
                    </div>
                )}

                <input
                    id={inputId}
                    className={`
            w-full outline-none transition-all duration-300
            placeholder:text-gray-400 dark:placeholder:text-gray-600
            ${sizes[size]}
            ${variants[variant]}
            ${errorStyles}
            ${startIcon ? 'pl-11' : ''}
            ${endIcon ? 'pr-11' : ''}
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
                    {...props}
                />

                {/* End Icon */}
                {endIcon && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        {endIcon}
                    </div>
                )}

                {/* Animated focus ring for premium feel */}
                <div className="absolute inset-0 rounded-[inherit] -z-10 focus-within:ring-4 ring-blue-500/5 transition-all duration-300" />
            </div>

            {/* Error Message or Help Text */}
            {(error || helpText) && (
                <p className={`mt-1.5 text-xs ml-1 ${error ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                    {error || helpText}
                </p>
            )}
        </div>
    );
};

export default Input;
