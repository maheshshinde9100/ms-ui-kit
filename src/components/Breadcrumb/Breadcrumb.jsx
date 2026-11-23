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
              <span className="mx-2 text-faint">
                {separator}
              </span>
            )}
            {item.href ? (
              <a 
                href={item.href}
                className={`
                  flex items-center gap-1.5 text-[13px] transition-colors
                  ${index === items.length - 1 
                    ? 'text-ink font-medium cursor-default' 
                    : 'text-ink-soft hover:text-ink'}
                `}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </a>
            ) : (
              <span className={`
                flex items-center gap-1.5 text-[13px]
                ${index === items.length - 1 
                  ? 'text-ink font-medium' 
                  : 'text-ink-soft'}
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
