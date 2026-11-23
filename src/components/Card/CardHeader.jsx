import React from 'react';

/**
 * CardHeader Component
 * Header section for cards with title and actions
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Header content
 * @param {React.ReactNode} props.title - Card title
 * @param {React.ReactNode} props.subtitle - Card subtitle
 * @param {React.ReactNode} props.actions - Action buttons/icons
 * @param {boolean} props.divider - Show divider below header
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} CardHeader component
 */
const CardHeader = ({
  children,
  title,
  subtitle,
  actions,
  divider = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        px-6 pt-6 pb-4
        ${divider ? 'border-b border-line' : ''}
        ${className}
      `}
      {...props}
    >
      {/* If title/subtitle are provided */}
      {(title || subtitle) && (
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {title && (
              <h3 className="text-[15px] font-semibold text-ink">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-[13px] text-ink-soft">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Actions */}
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}
      
      {/* Custom children content */}
      {children && !title && !subtitle && (
        <div>{children}</div>
      )}
    </div>
  );
};

export default CardHeader;