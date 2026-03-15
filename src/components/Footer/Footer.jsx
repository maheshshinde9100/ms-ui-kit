import React from 'react';
import { Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({
  logoText = "ms-ui-kit",
  description = "A premium UI component library crafted for modern web applications.",
  socials = [],
  companyInfo = {
    name: "MS Studio",
    year: new Date().getFullYear(),
  },
  links = [],
  className = ""
}) => {
  return (
    <footer className={`bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                <Layers className="text-white" size={24} />
              </div>
              <span className="font-black text-2xl tracking-tighter bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {logoText}
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
            {links.map((column, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start">
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 tracking-wide">
                  {column.title}
                </h4>
                <ul className="space-y-4">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {item.href.startsWith('/') ? (
                        <Link 
                          to={item.href}
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a 
                          href={item.href}
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 dark:border-gray-800 gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {companyInfo.year} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
