import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ 
  tabs = [], 
  defaultTab, 
  variant = 'pill', 
  activeColor = 'blue',
  className = '' 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || (tabs.length > 0 ? tabs[0].id : null));

  const colors = {
    blue: 'bg-accent',
    purple: 'bg-accent',
    emerald: 'bg-emerald-600',
    dark: 'bg-ink',
  };

  const textColors = {
    blue: 'text-accent-ink',
    purple: 'text-accent-ink',
    emerald: 'text-emerald-600',
    dark: 'text-ink',
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={`flex gap-2 p-1 mb-6 border-b border-line relative`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors duration-300
              ${activeTab === tab.id ? (variant === 'pill' ? 'text-white' : textColors[activeColor]) : 'text-ink-soft hover:text-ink'}
            `}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className={`absolute inset-0 z-0 ${variant === 'pill' ? `rounded-full ${colors[activeColor]}` : `border-b-2 border-current bottom-[-1px] left-0 right-0 h-0.5 ${textColors[activeColor]}`}`}
                transition={{ type: "spring", bounce: 0.15, duration: 0.55 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find(t => t.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
