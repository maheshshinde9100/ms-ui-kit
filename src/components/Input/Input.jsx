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
        sm: 'px-4 py-2 text-sm rounded-full',
        md: 'px-5 py-2.5 text-sm rounded-full',
        lg: 'px-6 py-3.5 text-base rounded-full',
    };

    // Variant styles
    const variants = {
        outline: `
      bg-surface text-ink
      border border-line
      hover:border-line-strong
      focus:border-accent
      focus:ring-4 focus:ring-accent-soft
    `,
        filled: `
      bg-surface-2 text-ink
      border border-transparent
      hover:border-line
      focus:bg-surface
      focus:border-accent
      focus:ring-4 focus:ring-accent-soft
    `,
        glass: `
      bg-surface/60 text-ink
      backdrop-blur-md
      border border-line
      hover:border-line-strong
      focus:border-accent
      focus:ring-4 focus:ring-accent-soft
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
                    className="ml-4 mb-2 block text-[13px] font-medium text-ink-soft transition-colors"
                >
                    {label}
                </label>
            )}

            <div className="relative group">
                {/* Start Icon */}
                {startIcon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-faint transition-colors group-focus-within:text-accent-ink">
                        {startIcon}
                    </div>
                )}

                <input
                    id={inputId}
                    className={`
            w-full outline-none transition-[border-color,background-color,box-shadow] duration-300
            placeholder:text-faint
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
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-faint transition-colors group-focus-within:text-accent-ink">
                        {endIcon}
                    </div>
                )}
            </div>

            {/* Error Message or Help Text */}
            {(error || helpText) && (
                <p className={`mt-1.5 ml-4 text-xs ${error ? 'text-red-500 font-medium' : 'text-faint'}`}>
                    {error || helpText}
                </p>
            )}
        </div>
    );
};

export default Input;
