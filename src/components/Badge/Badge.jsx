import React from 'react';

/**
 * ms-ui-kit Badge Component
 * A premium badge/tag component for labels and counts
 */
const Badge = ({
    children,
    variant = 'primary', // primary, secondary, success, warning, danger, neutral
    size = 'md', // sm, md, lg
    isPill = true,
    isDot = false,
    className = '',
    ...props
}) => {
    const variants = {
        primary: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
        secondary: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
        success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
        warning: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
        danger: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
        neutral: 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-[10px] font-bold',
        md: 'px-2.5 py-1 text-xs font-bold leading-none',
        lg: 'px-3 py-1.5 text-sm font-bold',
    };

    if (isDot) {
        return (
            <span
                className={`inline-block w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-gray-900 ${variants[variant].split(' ')[0]} ${className}`}
                {...props}
            />
        );
    }

    return (
        <span
            className={`
        inline-flex items-center justify-center
        border-1.5 transition-all duration-200
        ${isPill ? 'rounded-full' : 'rounded-lg'}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
