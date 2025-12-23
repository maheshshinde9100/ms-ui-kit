import React from 'react';

/**
 * ms-ui-kit Spinner Component
 * A premium loading spinner
 */
const Spinner = ({
    size = 'md', // sm, md, lg, xl
    variant = 'primary', // primary, success, warning, danger, white
    className = '',
    ...props
}) => {
    const sizes = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
        xl: 'w-16 h-16 border-4',
    };

    const variants = {
        primary: 'border-blue-600/20 border-t-blue-600',
        success: 'border-emerald-600/20 border-t-emerald-600',
        warning: 'border-amber-600/20 border-t-amber-600',
        danger: 'border-red-600/20 border-t-red-600',
        white: 'border-white/20 border-t-white',
    };

    return (
        <div
            className={`
        inline-block animate-spin rounded-full
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
            role="status"
            {...props}
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;
