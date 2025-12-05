import React from 'react';

/**
 * CardFooter Component
 * Footer section for cards with actions
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Footer content
 * @param {React.ReactNode} props.actions - Action buttons
 * @param {boolean} props.divider - Show divider above footer
 * @param {string} props.align - Content alignment (left, center, right)
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} CardFooter component
 */
const CardFooter = ({
  children,
  actions,
  divider = true,
  align = 'right',
  className = '',
  ...props
}) => {
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div
      className={`
        px-6 py-4
        ${divider ? 'border-t border-gray-200 dark:border-gray-700' : ''}
        ${className}
      `}
      {...props}
    >
      {/* If actions are provided */}
      {actions && (
        <div className={`flex gap-3 ${alignmentClasses[align]}`}>
          {actions}
        </div>
      )}
      
      {/* Custom children content */}
      {children && !actions && (
        <div>{children}</div>
      )}
    </div>
  );
};

export default CardFooter;