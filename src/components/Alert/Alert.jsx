import React, { useState } from 'react';

/**
 * ms-ui-kit Alert Component
 * A premium feedback component for user notifications
 */
const Alert = ({
    children,
    title,
    variant = 'info', // info, success, warning, danger
    styleType = 'light', // light, solid, glass
    icon,
    onClose,
    className = '',
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const variantStyles = {
        info: {
            light: 'bg-blue-50 text-blue-800 border-blue-200',
            solid: 'bg-blue-600 text-white border-blue-700',
            glass: 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/20 backdrop-blur-md',
            iconColor: 'text-blue-500'
        },
        success: {
            light: 'bg-emerald-50 text-emerald-800 border-emerald-200',
            solid: 'bg-emerald-600 text-white border-emerald-700',
            glass: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20 backdrop-blur-md',
            iconColor: 'text-emerald-500'
        },
        warning: {
            light: 'bg-amber-50 text-amber-800 border-amber-200',
            solid: 'bg-amber-600 text-white border-amber-700',
            glass: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20 backdrop-blur-md',
            iconColor: 'text-amber-500'
        },
        danger: {
            light: 'bg-red-50 text-red-800 border-red-200',
            solid: 'bg-red-600 text-white border-red-700',
            glass: 'bg-red-500/10 text-red-800 dark:text-red-300 border-red-500/20 backdrop-blur-md',
            iconColor: 'text-red-500'
        }
    };

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    return (
        <div
            role="alert"
            className={`
        relative flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-300
        animate-in fade-in slide-in-from-top-2
        ${variantStyles[variant][styleType]}
        ${className}
      `}
            {...props}
        >
            {/* Icon */}
            {icon && (
                <div className={`mt-0.5 flex-shrink-0 ${styleType === 'solid' ? 'text-white' : variantStyles[variant].iconColor}`}>
                    {icon}
                </div>
            )}

            <div className="flex-1">
                {title && <h4 className="text-sm font-bold mb-1">{title}</h4>}
                <div className="text-sm opacity-90">{children}</div>
            </div>

            {/* Close Button */}
            {onClose && (
                <button
                    onClick={handleClose}
                    className={`
            p-1 rounded-lg transition-colors
            ${styleType === 'solid' ? 'hover:bg-white/20' : 'hover:bg-black/5 dark:hover:bg-white/5'}
          `}
                    aria-label="Close"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Alert;
