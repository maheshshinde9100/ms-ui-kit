import React, { useState, useEffect, useCallback } from 'react';
import { Search, Command, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette = ({ 
    isOpen, 
    onClose, 
    actions = [], 
    placeholder = "Type a command or search..." 
}) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const filteredActions = actions.filter(action => 
        action.label.toLowerCase().includes(query.toLowerCase()) ||
        action.description?.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedIndex(0);
    }, [query]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % filteredActions.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredActions[selectedIndex]) {
                filteredActions[selectedIndex].onSelect();
                onClose();
            }
        } else if (e.key === 'Escape') {
            onClose();
        }
    }, [filteredActions, selectedIndex, onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#0a0a0a]/40 backdrop-blur-md z-[1000]"
                    />
                    <div className="fixed inset-0 z-[1001] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97, y: -12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97, y: -12 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full max-w-2xl bg-surface rounded-2xl shadow-[0_24px_80px_rgba(10,10,10,0.25)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden pointer-events-auto border border-line"
                        >
                            <div className="flex items-center px-5 py-3.5 border-b border-line">
                                <Search size={18} className="text-faint mr-3" />
                                <input
                                    autoFocus
                                    className="flex-1 bg-transparent border-none outline-none text-[15px] text-ink placeholder:text-faint"
                                    placeholder={placeholder}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <div className="flex items-center gap-2">
                                    <kbd className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-surface-2 border border-line rounded-md font-mono text-[10px] text-ink-soft">
                                        <Command size={10} /> K
                                    </kbd>
                                    <button onClick={onClose} aria-label="Close" className="grid h-7 w-7 place-items-center rounded-full text-ink-soft hover:bg-surface-2 hover:text-ink transition-colors">
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="max-h-[60vh] overflow-y-auto p-2">
                                {filteredActions.length > 0 ? (
                                    <div className="space-y-0.5">
                                        {filteredActions.map((action, index) => (
                                            <div
                                                key={action.id || index}
                                                onClick={() => {
                                                    action.onSelect();
                                                    onClose();
                                                }}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                                                    index === selectedIndex 
                                                    ? 'bg-accent text-white' 
                                                    : 'hover:bg-surface-2 text-ink-soft'
                                                }`}
                                            >
                                                <div className={`grid h-8 w-8 place-items-center rounded-lg ${index === selectedIndex ? 'bg-white/15 text-white' : 'bg-surface-2 text-ink-soft'}`}>
                                                    {action.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-[13px] font-medium">{action.label}</div>
                                                    {action.description && (
                                                        <div className={`text-xs ${index === selectedIndex ? 'text-white/70' : 'text-faint'}`}>
                                                            {action.description}
                                                        </div>
                                                    )}
                                                </div>
                                                {index === selectedIndex && <ChevronRight size={16} />}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-12 text-center text-sm text-ink-soft">
                                        No results for "<span className="font-medium text-ink">{query}</span>"
                                    </div>
                                )}
                            </div>

                            <div className="px-5 py-2.5 bg-surface-2 border-t border-line flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                                <div className="flex gap-4">
                                    <span className="flex items-center gap-1.5"><kbd className="bg-surface px-1.5 py-0.5 rounded border border-line text-ink-soft">↵</kbd> select</span>
                                    <span className="flex items-center gap-1.5"><kbd className="bg-surface px-1.5 py-0.5 rounded border border-line text-ink-soft">↑↓</kbd> navigate</span>
                                </div>
                                <span>Command Palette</span>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
