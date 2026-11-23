import React, { useState } from 'react';

/**
 * ms-ui-kit Accordion Component
 * A premium collapsible content component
 */
const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-line last:border-0 overflow-hidden">
            <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-2/60 transition-colors"
                onClick={onClick}
            >
                <span className="font-medium text-ink">{title}</span>
                <svg
                    className={`w-4 h-4 text-faint transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
                <div className="text-ink-soft leading-relaxed text-[13px]">
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
        <div className={`bg-surface text-ink rounded-2xl overflow-hidden border border-line ${className}`}>
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
