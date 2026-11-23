import React from 'react';

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
    font-medium font-sans whitespace-nowrap
    transition-[background-color,border-color,color,opacity,transform] duration-200 ease-out
    disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none
    rounded-full
    select-none
    active:scale-[0.985]
  `;

  // Variant styles
  const variantClasses = {
    // Primary - ink solid (inverts with the theme)
    primary: `
      bg-ink text-paper
      hover:opacity-90
    `,

    // Secondary - quiet filled surface
    secondary: `
      bg-surface-2 text-ink
      border border-line
      hover:border-line-strong
    `,

    // Outline - hairline border only
    outline: `
      bg-transparent
      text-ink
      border border-line-strong
      hover:bg-surface-2 hover:border-ink/40
    `,

    // Ghost - text only
    ghost: `
      bg-transparent
      text-ink-soft
      hover:bg-surface-2 hover:text-ink
    `,

    // Danger - red for destructive actions
    danger: `
      bg-red-600 text-white
      hover:bg-red-700
    `,

    // Success - green for positive actions
    success: `
      bg-emerald-600 text-white
      hover:bg-emerald-700
    `,

    // Warning - amber for caution
    warning: `
      bg-amber-500 text-ink
      hover:bg-amber-400
    `,

    // Premium - the single indigo accent
    premium: `
      bg-accent text-white
      hover:opacity-90
    `,
  };

  // Size styles
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-[11px] font-medium gap-1.5',
    sm: 'px-4 py-2 text-[13px] gap-2',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-[15px] gap-2.5',
    xl: 'px-7 py-3.5 text-base gap-3',
  };

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