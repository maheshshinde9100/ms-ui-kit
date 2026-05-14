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
                        className="fixed inset-0 bg-gray-950/40 backdrop-blur-md z-[1000]"
                    />
                    <div className="fixed inset-0 z-[1001] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto border border-gray-100 dark:border-gray-800"
                        >
                            <div className="flex items-center px-6 py-4 border-b border-gray-50 dark:border-gray-800">
                                <Search size={22} className="text-gray-400 mr-4" />
                                <input
                                    autoFocus
                                    className="flex-1 bg-transparent border-none outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400"
                                    placeholder={placeholder}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <div className="flex items-center gap-2">
                                    <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-bold text-gray-500">
                                        <Command size={10} /> K
                                    </kbd>
                                    <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                        <X size={18} className="text-gray-400" />
                                    </button>
                                </div>
                            </div>

                            <div className="max-h-[60vh] overflow-y-auto p-3">
                                {filteredActions.length > 0 ? (
                                    <div className="space-y-1">
                                        {filteredActions.map((action, index) => (
                                            <div
                                                key={action.id || index}
                                                onClick={() => {
                                                    action.onSelect();
                                                    onClose();
                                                }}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all ${
                                                    index === selectedIndex 
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                                                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300'
                                                }`}
                                            >
                                                <div className={`p-2 rounded-xl ${index === selectedIndex ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800'}`}>
                                                    {action.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-bold">{action.label}</div>
                                                    {action.description && (
                                                        <div className={`text-xs ${index === selectedIndex ? 'text-blue-100' : 'text-gray-500'}`}>
                                                            {action.description}
                                                        </div>
                                                    )}
                                                </div>
                                                {index === selectedIndex && <ChevronRight size={18} />}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="py-12 text-center text-gray-500">
                                        No results for "<span className="font-bold text-gray-900 dark:text-white">{query}</span>"
                                    </div>
                                )}
                            </div>

                            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
                                <div className="flex gap-4">
                                    <span className="flex items-center gap-1"><kbd className="bg-white dark:bg-gray-900 px-1 rounded shadow-sm border border-gray-200 dark:border-gray-700">↵</kbd> select</span>
                                    <span className="flex items-center gap-1"><kbd className="bg-white dark:bg-gray-900 px-1 rounded shadow-sm border border-gray-200 dark:border-gray-700">↑↓</kbd> navigate</span>
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
