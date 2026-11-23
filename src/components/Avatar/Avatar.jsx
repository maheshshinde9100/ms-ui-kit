import React from 'react';

/**
 * ms-ui-kit Avatar Component
 * A premium avatar component for user profiles
 */
const Avatar = ({
    src,
    alt = 'Avatar',
    name,
    size = 'md', // xs, sm, md, lg, xl
    shape = 'circle', // circle, rounded
    bordered = false,
    status, // online, offline, busy, away
    className = '',
    ...props
}) => {
    const sizes = {
        xs: 'w-6 h-6 text-[10px]',
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-16 h-16 text-xl',
        xl: 'w-24 h-24 text-3xl',
    };

    const statusColors = {
        online: 'bg-emerald-500',
        offline: 'bg-line-strong',
        busy: 'bg-red-500',
        away: 'bg-amber-500',
    };

    const getInitials = (n) => {
        if (!n) return '';
        return n
            .split(' ')
            .map((part) => part[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    const baseClasses = `
    relative flex items-center justify-center overflow-hidden flex-shrink-0
    bg-surface-2
    text-ink-soft font-semibold
    ${sizes[size]}
    ${shape === 'circle' ? 'rounded-full' : 'rounded-2xl'}
    ${bordered ? 'ring-2 ring-paper' : ''}
    ${className}
  `;

    return (
        <div className={baseClasses} {...props}>
            {src ? (
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <span>{getInitials(name) || alt[0]}</span>
            )}

            {status && (
                <span
                    className={`
            absolute border-2 border-paper rounded-full
            ${statusColors[status]}
            ${size === 'xs' ? 'w-1.5 h-1.5 bottom-0 right-0' : ''}
            ${size === 'sm' ? 'w-2.5 h-2.5 bottom-0 right-0' : ''}
            ${size === 'md' ? 'w-3 h-3 bottom-0.5 right-0.5' : ''}
            ${size === 'lg' ? 'w-4 h-4 bottom-1 right-1' : ''}
            ${size === 'xl' ? 'w-6 h-6 bottom-1.5 right-1.5' : ''}
          `}
                />
            )}
        </div>
    );
};

export default Avatar;
