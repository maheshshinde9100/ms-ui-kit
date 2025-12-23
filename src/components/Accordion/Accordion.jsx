import React, { useState } from 'react';

/**
 * ms-ui-kit Accordion Component
 * A premium collapsible content component
 */
const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 dark:border-gray-800 last:border-0 overflow-hidden">
            <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                onClick={onClick}
            >
                <span className="font-bold text-gray-800 dark:text-gray-100">{title}</span>
                <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`
          px-6 transition-all duration-300 ease-in-out
          ${isOpen ? 'pb-5 opacity-100 max-h-[500px]' : 'max-h-0 opacity-0'}
        `}
            >
                <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ items, allowMultiple = false, className = '' }) => {
    const [openIndexes, setOpenIndexes] = useState([0]);

    const handleToggle = (index) => {
        if (allowMultiple) {
            setOpenIndexes(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndexes(prev => prev.includes(index) ? [] : [index]);
        }
    };

    return (
        <div className={`bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm ${className}`}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onClick={() => handleToggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
