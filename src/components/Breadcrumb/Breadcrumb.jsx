import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ 
  items = [], 
  separator = <ChevronRight size={16} />,
  className = '' 
}) => {
  return (
    <nav className={`flex items-center text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center group">
            {index !== 0 && (
              <span className="mx-2 text-gray-400 dark:text-gray-600">
                {separator}
              </span>
            )}
            {item.href ? (
              <a 
                href={item.href}
                className={`
                  flex items-center gap-1.5 font-medium transition-colors
                  ${index === items.length - 1 
                    ? 'text-gray-900 dark:text-white cursor-default' 
                    : 'text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'}
                `}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </a>
            ) : (
              <span className={`
                flex items-center gap-1.5 font-medium
                ${index === items.length - 1 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400'}
              `}>
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
