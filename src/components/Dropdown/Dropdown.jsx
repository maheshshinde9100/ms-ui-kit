import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  label,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelect = (optionValue) => {
    if (onChange) onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative flex flex-col space-y-2 w-full ${className}`} ref={dropdownRef}>
      {label && <label className="text-[13px] font-medium text-ink-soft">{label}</label>}
      
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between w-full px-5 py-2.5 rounded-full border transition-[border-color,box-shadow,background-color] duration-300
          ${isOpen ? 'border-accent ring-4 ring-accent-soft bg-surface' : 'border-line bg-surface'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-line-strong cursor-pointer'}
        `}
      >
        <span className={`block truncate text-sm ${!selectedOption ? 'text-faint' : 'text-ink font-medium'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-faint transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-ink' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-50 w-full mt-2 top-full bg-surface border border-line rounded-xl shadow-[0_12px_40px_rgba(10,10,10,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <ul className="max-h-60 overflow-auto py-1.5 outline-none">
              {options.map((option, index) => {
                const isSelected = value === option.value;
                return (
                  <li
                    key={index}
                    onClick={() => handleSelect(option.value)}
                    className={`
                      relative cursor-pointer select-none py-2.5 pl-4 pr-10 text-sm transition-colors
                      ${isSelected ? 'text-accent-ink bg-accent-soft font-medium' : 'text-ink-soft hover:bg-surface-2 hover:text-ink'}
                    `}
                  >
                    <span className="block truncate">{option.label}</span>
                    {isSelected && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-accent-ink">
                        <Check size={16} />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
