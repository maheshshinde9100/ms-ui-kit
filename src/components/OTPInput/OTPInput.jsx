import React, { useState, useRef, useEffect } from 'react';

/**
 * ms-ui-kit OTPInput Component
 * A premium OTP input field featuring smooth transitions, full keyboard navigation, and copy-paste support.
 */
const OTPInput = ({
    length = 6,
    value,
    onChange,
    onComplete,
    disabled = false,
    error,
    helpText,
    variant = 'outline', // outline, filled, glass
    size = 'md', // sm, md, lg
    otpType = 'number', // number, text
    autoFocus = false,
    placeholder = '',
    className = '',
}) => {
    const [prevValue, setPrevValue] = useState(value);
    const [otpValues, setOtpValues] = useState(() => {
        if (value !== undefined && typeof value === 'string') {
            return value.split('').slice(0, length).concat(Array(Math.max(0, length - value.length)).fill(''));
        }
        return Array(length).fill('');
    });

    const inputRefs = useRef([]);

    // Sync external value changes during render (avoiding set-state-in-effect)
    if (value !== prevValue) {
        setPrevValue(value);
        if (value !== undefined && typeof value === 'string') {
            const arr = value.split('').slice(0, length);
            setOtpValues(arr.concat(Array(Math.max(0, length - arr.length)).fill('')));
        }
    }

    // Focus on first input if autoFocus is true
    useEffect(() => {
        if (autoFocus && inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [autoFocus]);

    // Validate a single character input
    const isValidChar = (char) => {
        if (otpType === 'number') {
            return /^[0-9]$/.test(char);
        }
        return /^[a-zA-Z0-9]$/.test(char);
    };

    // Size styles (square boxes with dynamic text sizes)
    const sizes = {
        sm: 'w-10 h-10 text-base font-semibold text-center rounded-lg',
        md: 'w-12 h-12 text-lg font-semibold text-center rounded-xl',
        lg: 'w-14 h-14 text-xl font-semibold text-center rounded-2xl',
    };

    // Variant styles matching other input elements
    const variants = {
        outline: `
      bg-surface text-ink
      border border-line 
      hover:border-line-strong
      focus:border-accent
      focus:ring-4 focus:ring-accent-soft
    `,
        filled: `
      bg-surface-2 text-ink 
      border border-transparent
      hover:border-line
      focus:bg-surface
      focus:border-accent
      focus:ring-4 focus:ring-accent-soft
    `,
        glass: `
      bg-surface/60 text-ink 
      backdrop-blur-md
      border border-line
      hover:border-line-strong
      focus:border-accent
      focus:ring-4 focus:ring-accent-soft
    `
    };

    // Error state classes
    const errorStyles = error
        ? '!border-red-500 focus:!ring-red-500/15'
        : '';

    const handleInputChange = (index, e) => {
        const val = e.target.value;
        if (!val) return;

        // Take only the last character entered
        const lastChar = val.substring(val.length - 1);

        if (!isValidChar(lastChar)) {
            return;
        }

        const newValues = [...otpValues];
        newValues[index] = lastChar;
        setOtpValues(newValues);

        const currentOtpString = newValues.join('');
        if (onChange) {
            onChange(currentOtpString);
        }

        // Auto-focus next input
        if (index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // If all fields are completed
        if (currentOtpString.length === length && newValues.every(v => v !== '')) {
            if (onComplete) {
                onComplete(currentOtpString);
            }
        }
    };

    const handleKeyDown = (index, e) => {
        const currentVal = otpValues[index];

        if (e.key === 'Backspace') {
            e.preventDefault();
            const newValues = [...otpValues];

            if (currentVal !== '') {
                newValues[index] = '';
                setOtpValues(newValues);
                if (onChange) onChange(newValues.join(''));
            } else if (index > 0) {
                newValues[index - 1] = '';
                setOtpValues(newValues);
                inputRefs.current[index - 1]?.focus();
                if (onChange) onChange(newValues.join(''));
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (index < length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        } else if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        if (disabled) return;

        const pastedData = e.clipboardData.getData('text');
        // Clean characters based on validation type
        const cleanData = pastedData
            .replace(/\s/g, '') // remove spaces
            .split('')
            .filter(isValidChar)
            .slice(0, length);

        if (cleanData.length === 0) return;

        const newValues = [...otpValues];
        for (let i = 0; i < length; i++) {
            if (i < cleanData.length) {
                newValues[i] = cleanData[i];
            }
        }

        setOtpValues(newValues);
        const currentOtpString = newValues.join('');

        if (onChange) {
            onChange(currentOtpString);
        }

        // Focus the last filled box
        const focusIndex = Math.min(cleanData.length, length - 1);
        inputRefs.current[focusIndex]?.focus();

        // If completed
        const isComplete = cleanData.length === length || (currentOtpString.length === length && newValues.every(v => v !== ''));
        if (isComplete && onComplete) {
            onComplete(currentOtpString);
        }
    };

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <div className="flex gap-2.5 items-center justify-start flex-wrap">
                {otpValues.map((val, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode={otpType === 'number' ? 'numeric' : 'text'}
                        pattern={otpType === 'number' ? '[0-9]*' : '[a-zA-Z0-9]*'}
                        maxLength={1}
                        value={val}
                        placeholder={placeholder.substring(0, 1) || ''}
                        disabled={disabled}
                        onChange={(e) => handleInputChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className={`
              outline-none transition-[border-color,box-shadow,background-color] duration-200 text-ink
              placeholder:text-faint
              ${sizes[size]}
              ${variants[variant]}
              ${errorStyles}
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
                    />
                ))}
            </div>

            {/* Error Message or Help Text */}
            {(error || helpText) && (
                <p className={`mt-1.5 text-xs ml-1 ${error ? 'text-red-500' : 'text-ink-soft'}`}>
                    {error || helpText}
                </p>
            )}
        </div>
    );
};

export default OTPInput;
