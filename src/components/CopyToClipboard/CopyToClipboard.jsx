import React, { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

/**
 * CopyToClipboard Component
 * A reusable component that allows users to copy text with visual feedback
 * 
 * @param {string} value - The text to be copied to clipboard
 * @param {string} [label] - Custom label for the button when not copied (default: "Copy")
 * @param {string} [copiedLabel] - Custom label for the button when copied (default: "Copied!")
 * @param {React.ReactNode} [icon] - Custom icon component for copy state
 * @param {React.ReactNode} [copiedIcon] - Custom icon component for copied state
 * @param {number} [timeout=2000] - Time in milliseconds before reverting to copy state
 * @param {boolean} [disabled=false] - Whether the button is disabled
 * @param {function} [onCopy] - Callback function when text is successfully copied
 * @param {string} [className] - Additional CSS classes
 * @param {string} [variant='primary'] - Button variant (primary, secondary, outline, ghost, danger, success, warning)
 * @param {string} [size='md'] - Button size (xs, sm, md, lg, xl)
 * @param {string} [ariaLabel] - Custom aria-label for accessibility
 */
const CopyToClipboard = ({
  value,
  label = 'Copy',
  copiedLabel = 'Copied!',
  icon,
  copiedIcon,
  timeout = 2000,
  disabled = false,
  onCopy,
  className = '',
  variant = 'primary',
  size = 'md',
  ariaLabel,
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (disabled || !value) {
      return;
    }

    try {
      // Use modern Clipboard API
      await navigator.clipboard.writeText(value);
      
      setIsCopied(true);
      
      // Call the onCopy callback if provided
      if (onCopy) {
        onCopy(value);
      }

      // Reset copied state after timeout
      const timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => clearTimeout(timeoutId);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      
      // Fallback for older browsers or security contexts
      try {
        const textArea = document.createElement('textarea');
        textArea.value = value;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        setIsCopied(true);
        if (onCopy) {
          onCopy(value);
        }

        const timeoutId = setTimeout(() => {
          setIsCopied(false);
        }, timeout);

        return () => clearTimeout(timeoutId);
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr);
      }
    }
  }, [value, timeout, disabled, onCopy]);

  // Base button classes
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-medium font-sans
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    rounded-lg
    select-none
    active:scale-[0.98]
    dark:focus:ring-offset-gray-950
  `;

  // Variant styles
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-500 to-blue-600
      hover:from-blue-600 hover:to-blue-700
      active:from-blue-700 active:to-blue-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-blue-500/50
      border border-blue-600
    `,
    secondary: `
      bg-gradient-to-r from-gray-100 to-gray-200
      dark:from-gray-800 dark:to-gray-900
      hover:from-gray-200 hover:to-gray-300
      dark:hover:from-gray-700 dark:hover:to-gray-800
      active:from-gray-300 active:to-gray-400
      dark:active:from-gray-600 dark:active:to-gray-700
      text-gray-800 dark:text-gray-100
      shadow-sm hover:shadow
      focus:ring-gray-400/50
      border border-gray-300 dark:border-gray-700
    `,
    outline: `
      bg-transparent
      hover:bg-gray-50 dark:hover:bg-gray-900
      active:bg-gray-100 dark:active:bg-gray-800
      text-gray-700 dark:text-gray-300
      border-2 border-gray-300 dark:border-gray-700
      hover:border-gray-400 dark:hover:border-gray-600
      focus:ring-gray-400/30
    `,
    ghost: `
      bg-transparent
      hover:bg-gray-100 dark:hover:bg-gray-800/50
      active:bg-gray-200 dark:active:bg-gray-700/50
      text-gray-700 dark:text-gray-400
      focus:ring-gray-400/30
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-red-600
      hover:from-red-600 hover:to-red-700
      active:from-red-700 active:to-red-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-red-500/50
      border border-red-600
    `,
    success: `
      bg-gradient-to-r from-emerald-500 to-emerald-600
      hover:from-emerald-600 hover:to-emerald-700
      active:from-emerald-700 active:to-emerald-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-emerald-500/50
      border border-emerald-600
    `,
    warning: `
      bg-gradient-to-r from-amber-500 to-amber-600
      hover:from-amber-600 hover:to-amber-700
      active:from-amber-700 active:to-amber-800
      text-white
      shadow-md hover:shadow-lg
      focus:ring-amber-500/50
      border border-amber-600
    `,
  };

  // Size styles
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-lg',
  };

  // Determine which label and icon to display
  const displayLabel = isCopied ? copiedLabel : label;
  const displayIcon = isCopied ? (copiedIcon || <Check size={18} />) : (icon || <Copy size={18} />);

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      onClick={handleCopy}
      disabled={disabled || !value}
      type="button"
      aria-label={ariaLabel || `${displayLabel}. ${value ? `Copy: ${value}` : 'No value to copy'}`}
      aria-pressed={isCopied}
      {...props}
    >
      <span className="flex-shrink-0" aria-hidden="true">
        {displayIcon}
      </span>
      <span className="truncate">{displayLabel}</span>
    </button>
  );
};

export default CopyToClipboard;
