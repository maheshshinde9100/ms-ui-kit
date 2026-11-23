import React from 'react';

/**
 * ms-ui-kit Badge Component
 * A quiet status label for metadata, counts, and states
 */
const Badge = ({
    children,
    variant = 'primary', // primary, premium, secondary, success, warning, danger, neutral
    size = 'md', // sm, md, lg
    isPill = true,
    isDot = false,
    className = '',
    ...props
}) => {
    const variants = {
        primary: 'bg-accent-soft text-accent-ink border-accent-line',
        premium: 'bg-accent-soft text-accent-ink border-accent-line',
        secondary: 'bg-surface-2 text-ink-soft border-line',
        success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
        warning: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
        danger: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
        neutral: 'bg-surface-2 text-ink-soft border-line',
    };

    const dots = {
        primary: 'bg-accent',
        premium: 'bg-accent',
        secondary: 'bg-ink-faint',
        success: 'bg-emerald-500',
        warning: 'bg-amber-500',
        danger: 'bg-red-500',
        neutral: 'bg-ink-faint',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-[10px] font-medium',
        md: 'px-2.5 py-1 text-[11px] font-medium leading-none',
        lg: 'px-3 py-1.5 text-xs font-medium',
    };

    if (isDot) {
        return (
            <span
                className={`inline-block w-2 h-2 rounded-full ${dots[variant] ?? dots.neutral} ${className}`}
                {...props}
            />
        );
    }

    return (
        <span
            className={`
        inline-flex items-center justify-center gap-1.5
        border transition-colors duration-200
        ${isPill ? 'rounded-full' : 'rounded-md'}
        ${sizes[size]}
        ${variants[variant] ?? variants.neutral}
        ${className}
      `}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
