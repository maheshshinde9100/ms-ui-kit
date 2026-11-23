import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Avatar from '../Avatar';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import CursorSelector from '../CustomCursor/CursorSelector';

/**
 * ms-ui-kit Navbar Component
 * A quiet sticky header with hairline chrome and a mobile sheet
 */

const Navbar = ({
    logo = 'ms-ui-kit',
    links = [],
    user,
    className = '',
    cursorStyle,
    onCursorChange,
    mobileVariant='menu',
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClasses =
        'relative text-[13px] font-medium tracking-wide text-ink-soft transition-colors duration-200 hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100';

    const renderLink = (link, index, mobile = false) => {
        const isInternal = link.href.startsWith('/');
        const classes = mobile
            ? 'block border-b border-line py-3.5 text-[15px] font-medium text-ink transition-colors hover:text-accent-ink last:border-b-0'
            : linkClasses;

        if (isInternal) {
            return (
                <Link
                    key={index}
                    to={link.href}
                    className={classes}
                    onClick={() => setIsOpen(false)}
                >
                    {link.label}
                </Link>
            );
        }
        return (
            <a
                key={index}
                href={link.href}
                className={classes}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
            >
                {link.label}
            </a>
        );
    };

    const solid = isScrolled || isOpen;

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-40
        transition-[background-color,border-color] duration-300
        ${solid
                    ? 'bg-paper/85 backdrop-blur-xl border-b border-line'
                    : 'bg-transparent border-b border-transparent'}
        ${className}
      `}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <Link
                    to="/"
                    className="group flex items-center gap-2.5"
                    onClick={() => setIsOpen(false)}
                >
                    <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink text-paper transition-transform duration-300 group-hover:-rotate-6">
                        <Layers size={16} strokeWidth={2} />
                    </span>
                    <span className="flex items-baseline gap-2">
                        <span className="text-[15px] font-semibold tracking-tight text-ink">
                            {logo}
                        </span>
                        <span className="hidden rounded-full border border-line px-1.5 py-px font-mono text-[9px] text-faint sm:inline">
                            v0.3
                        </span>
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link, index) => renderLink(link, index))}

                    <div className="flex items-center gap-4 pl-8 border-l border-line">
                        <ThemeToggle />

                        {user ? (
                            <div className="flex items-center gap-2.5">
                                <span className="text-right leading-tight hidden lg:block">
                                    <span className="block text-[12px] font-medium text-ink">
                                        {user.name}
                                    </span>
                                    <span className="block text-[11px] text-ink-soft">
                                        {user.role}
                                    </span>
                                </span>
                                <Avatar src={user.avatar} name={user.name} size="sm" status="online" bordered />
                            </div>
                        ) : (
                            <Link
                                to="/"
                                className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-opacity duration-200 hover:opacity-90"
                            >
                                Get started
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen((open) => !open)}
                        className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
                    </button>
                </div>
            </div>

            {/* Mobile sheet */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden md:hidden"
                    >
                        <div className="border-t border-line px-6 pb-6 pt-2">
                            <div className="flex flex-col">
                                {links.map((link, index) => renderLink(link, index, true))}
                            </div>
                            {user && (
                                <div className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                                    <Avatar src={user.avatar} name={user.name} size="md" bordered />
                                    <div className="leading-tight">
                                        <p className="text-[14px] font-medium text-ink">{user.name}</p>
                                        <p className="text-[12px] text-ink-soft">{user.role}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;