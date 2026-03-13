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
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    emerald: 'bg-emerald-600',
    dark: 'bg-gray-900 dark:bg-white',
  };

  const textColors = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    emerald: 'text-emerald-600',
    dark: 'text-gray-900 dark:text-white',
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={`flex gap-2 p-1 mb-6 border-b border-gray-200 dark:border-gray-800 relative`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-4 py-2 text-sm font-bold transition-all duration-300
              ${activeTab === tab.id ? (variant === 'pill' ? 'text-white' : textColors[activeColor]) : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}
            `}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className={`absolute inset-0 z-0 ${variant === 'pill' ? `rounded-lg ${colors[activeColor]}` : `border-b-2 border-current bottom-[-1px] left-0 right-0 h-0.5 ${textColors[activeColor]}`}`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
