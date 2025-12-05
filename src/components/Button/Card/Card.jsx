import React from 'react';

/**
 * ms-ui-kit Card Component
 * A flexible card container with multiple variants and layouts
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.variant - Card style variant
 * @param {boolean} props.elevated - Add shadow and elevation
 * @param {boolean} props.bordered - Show border
 * @param {boolean} props.rounded - Rounded corners
 * @param {boolean} props.hoverable - Add hover effect
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.width - Custom width (full, sm, md, lg, xl, auto)
 * @returns {JSX.Element} Card component
 */
const Card = ({
  children,
  variant = 'default',
  elevated = true,
  bordered = true,
  rounded = true,
  hoverable = false,
  className = '',
  width = 'auto',
  ...props
}) => {
  // Variant styles
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200',
    primary: 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-900 dark:text-primary-100',
    secondary: 'bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 text-secondary-900 dark:text-secondary-100',
    success: 'bg-gradient-to-br from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 text-success-900 dark:text-success-100',
    warning: 'bg-gradient-to-br from-warning-50 to-warning-100 dark:from-warning-900/20 dark:to-warning-800/20 text-warning-900 dark:text-warning-100',
    danger: 'bg-gradient-to-br from-danger-50 to-danger-100 dark:from-danger-900/20 dark:to-danger-800/20 text-danger-900 dark:text-danger-100',
    dark: 'bg-gradient-to-br from-gray-900 to-gray-800 text-white',
    glass: 'backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30',
  };

  // Border styles
  const borderClasses = bordered
    ? 'border border-gray-200 dark:border-gray-700'
    : 'border-0';

  // Elevation styles
  const elevationClasses = elevated
    ? 'shadow-md hover:shadow-lg transition-shadow duration-300'
    : 'shadow-none';

  // Rounded styles
  const roundedClasses = rounded
    ? 'rounded-xl'
    : 'rounded-none';

  // Hover effect
  const hoverClasses = hoverable
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
    : '';

  // Width classes
  const widthClasses = {
    auto: 'w-auto',
    full: 'w-full',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div
      className={`
        ${variantClasses[variant]}
        ${borderClasses}
        ${elevationClasses}
        ${roundedClasses}
        ${hoverClasses}
        ${widthClasses[width]}
        ${className}
        overflow-hidden
        transition-all duration-200
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// PropTypes for development
Card.propTypes = {
  children: (props, propName, componentName) => {
    if (!props[propName]) {
      return new Error(`Prop '${propName}' is required in '${componentName}'`);
    }
  },
  variant: (props, propName, componentName) => {
    const validVariants = ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'glass'];
    if (props[propName] && !validVariants.includes(props[propName])) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. ` +
        `Expected one of [${validVariants.join(', ')}]`
      );
    }
  },
  elevated: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean') {
      return new Error(`Prop '${propName}' must be a boolean in '${componentName}'`);
    }
  },
  bordered: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean') {
      return new Error(`Prop '${propName}' must be a boolean in '${componentName}'`);
    }
  },
  rounded: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean') {
      return new Error(`Prop '${propName}' must be a boolean in '${componentName}'`);
    }
  },
  hoverable: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean') {
      return new Error(`Prop '${propName}' must be a boolean in '${componentName}'`);
    }
  },
  width: (props, propName, componentName) => {
    const validWidths = ['auto', 'full', 'sm', 'md', 'lg', 'xl', '2xl'];
    if (props[propName] && !validWidths.includes(props[propName])) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. ` +
        `Expected one of [${validWidths.join(', ')}]`
      );
    }
  },
  className: (props, propName, componentName) => {
    if (props[propName] && typeof props[propName] !== 'string') {
      return new Error(`Prop '${propName}' must be a string in '${componentName}'`);
    }
  },
};

export default Card;