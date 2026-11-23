import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.94 }}
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-300 hover:border-line-strong hover:text-ink"
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <span className="relative h-[18px] w-[18px]">
        <motion.span
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 90,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun size={18} strokeWidth={1.75} />
        </motion.span>
        <motion.span
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -90,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon size={18} strokeWidth={1.75} />
        </motion.span>
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
