import React from 'react';
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  onClick,
  ...props
}) => {
  // Base classes that apply to all buttons
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium font-sans
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    rounded-lg
    select-none
    active:scale-[0.98]
  `;

  // Variant styles
  const variantClasses = {
    // Primary - Solid blue (default)
    primary: `
      bg-gradient-to-r from-blue-500 to-blue-600
      hover:from-blue-600 hover:to-blue-700
      active:from-blue-700 active:to-blue-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-blue-500/50
      border border-blue-600
    `,
    
    // Secondary - Light gray
    secondary: `
      bg-gradient-to-r from-gray-100 to-gray-200
      hover:from-gray-200 hover:to-gray-300
      active:from-gray-300 active:to-gray-400
      text-gray-800
      shadow-sm hover:shadow
      focus:ring-gray-400/50
      border border-gray-300
    `,
    
    // Outline - Border only
    outline: `
      bg-transparent
      hover:bg-gray-50
      active:bg-gray-100
      text-gray-700
      border-2 border-gray-300
      hover:border-gray-400
      focus:ring-gray-400/30
    `,
    
    // Ghost - Minimal
    ghost: `
      bg-transparent
      hover:bg-gray-100
      active:bg-gray-200
      text-gray-700
      focus:ring-gray-400/30
    `,
    
    // Danger - Red for destructive actions
    danger: `
      bg-gradient-to-r from-red-500 to-red-600
      hover:from-red-600 hover:to-red-700
      active:from-red-700 active:to-red-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-red-500/50
      border border-red-600
    `,
    
    // Success - Green for positive actions
    success: `
      bg-gradient-to-r from-emerald-500 to-emerald-600
      hover:from-emerald-600 hover:to-emerald-700
      active:from-emerald-700 active:to-emerald-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-emerald-500/50
      border border-emerald-600
    `,
    
    // Warning - Orange for caution
    warning: `
      bg-gradient-to-r from-amber-500 to-amber-600
      hover:from-amber-600 hover:to-amber-700
      active:from-amber-700 active:to-amber-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-amber-500/50
      border border-amber-600
    `,
    
    // Premium - Purple gradient for special actions
    premium: `
      bg-gradient-to-r from-purple-500 to-purple-600
      hover:from-purple-600 hover:to-purple-700
      active:from-purple-700 active:to-purple-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-purple-500/50
      border border-purple-600
    `,
  };

  // Size styles
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs font-medium gap-1.5',
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-4 py-2.5 text-sm gap-2.5',
    lg: 'px-5 py-3 text-base gap-3',
    xl: 'px-6 py-3.5 text-lg gap-3.5',
  };

  // Loading spinner component
  const Spinner = () => (
    <svg 
      className="animate-spin h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Handle click
  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-busy={loading}
      {...props}
    >
      {/* Loading State */}
      {loading && (
        <span className="mr-2">
          <Spinner />
        </span>
      )}
      
      {/* Start Icon */}
      {!loading && startIcon && (
        <span className="flex-shrink-0" aria-hidden="true">
          {startIcon}
        </span>
      )}
      
      {/* Button Text */}
      <span className="truncate">{children}</span>
      
      {/* End Icon */}
      {!loading && endIcon && (
        <span className="flex-shrink-0 ml-2" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </button>
  );
};

// PropTypes for better development experience
Button.propTypes = {
  children: (props, propName, componentName) => {
    if (!props[propName]) {
      return new Error(`Prop '${propName}' is required in '${componentName}'`);
    }
  },
  variant: (props, propName, componentName) => {
    const validVariants = ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success', 'warning', 'premium'];
    if (props[propName] && !validVariants.includes(props[propName])) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. ` +
        `Expected one of [${validVariants.join(', ')}]`
      );
    }
  },
  size: (props, propName, componentName) => {
    const validSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    if (props[propName] && !validSizes.includes(props[propName])) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. ` +
        `Expected one of [${validSizes.join(', ')}]`
      );
    }
  },
  disabled: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean') {
      return new Error(`Prop '${propName}' must be a boolean in '${componentName}'`);
    }
  },
  loading: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean') {
      return new Error(`Prop '${propName}' must be a boolean in '${componentName}'`);
    }
  },
  fullWidth: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean') {
      return new Error(`Prop '${propName}' must be a boolean in '${componentName}'`);
    }
  },
  className: (props, propName, componentName) => {
    if (props[propName] && typeof props[propName] !== 'string') {
      return new Error(`Prop '${propName}' must be a string in '${componentName}'`);
    }
  },
  onClick: (props, propName, componentName) => {
    if (props[propName] && typeof props[propName] !== 'function') {
      return new Error(`Prop '${propName}' must be a function in '${componentName}'`);
    }
  },
};

export default Button;