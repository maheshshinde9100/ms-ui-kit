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
      {label && <label className="text-sm font-bold text-gray-900 dark:text-white">{label}</label>}
      
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between w-full px-4 py-3 rounded-xl border-2 transition-all duration-300
          ${isOpen ? 'border-blue-500 ring-4 ring-blue-500/20 bg-white dark:bg-gray-900' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-300 dark:hover:border-gray-700 cursor-pointer'}
        `}
      >
        <span className={`block truncate ${!selectedOption ? 'text-gray-400 dark:text-gray-500' : 'text-gray-900 dark:text-white font-medium'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={18} 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 top-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl overflow-hidden"
          >
            <ul className="max-h-60 overflow-auto py-2 outline-none">
              {options.map((option, index) => {
                const isSelected = value === option.value;
                return (
                  <li
                    key={index}
                    onClick={() => handleSelect(option.value)}
                    className={`
                      relative cursor-pointer select-none py-2.5 pl-4 pr-10 hover:bg-gray-50 dark:hover:bg-gray-800/50
                      ${isSelected ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 font-bold' : 'text-gray-700 dark:text-gray-300'}
                    `}
                  >
                    <span className="block truncate">{option.label}</span>
                    {isSelected && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                        <Check size={18} />
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
