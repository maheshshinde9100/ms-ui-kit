import React, { useState, useEffect } from 'react';
import Avatar from '../Avatar';

/**
 * ms-ui-kit Navbar Component
 * A premium sticky navigation bar with glassmorphism
 */
const Navbar = ({
    logo = 'ms-ui-kit',
    links = [],
    user,
    className = '',
}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${isScrolled
                    ? 'py-3 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-sm'
                    : 'py-6 bg-transparent'}
        ${className}
      `}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-xl rotate-12 flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <span className="text-white font-black rotate-[-12deg]">M</span>
                    </div>
                    <span className="font-black text-xl tracking-tight text-gray-900 dark:text-white uppercase">
                        {logo}
                    </span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}

                    {user ? (
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-800">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">{user.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{user.role}</p>
                            </div>
                            <Avatar src={user.avatar} name={user.name} size="md" status="online" bordered />
                        </div>
                    ) : (
                        <button className="px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-gray-900/10">
                            Get Started
                        </button>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden p-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
