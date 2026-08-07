import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomCursor = ({ style = 'default', enabled = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [trailPoints, setTrailPoints] = useState([]);

  useEffect(() => {
    if (!enabled || style === 'default') return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (style === 'trail' || style === 'sparkle') {
        setTrailPoints((prev) => [
          { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() },
          ...prev.slice(0, style === 'sparkle' ? 8 : 12),
        ]);
      }

      const target = e.target;
      const computedCursor = window.getComputedStyle(target).cursor;
      setIsPointer(
        computedCursor === 'pointer' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled, style]);

  if (!enabled || style === 'default') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Glow Cursor */}
      {style === 'glow' && (
        <motion.div
          className="absolute rounded-full bg-indigo-500/30 blur-xl dark:bg-indigo-400/20"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            scale: isPointer ? 1.5 : 1,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          style={{ width: 80, height: 80 }}
        />
      )}

      {/* Trail Cursor */}
      {style === 'trail' && (
        <AnimatePresence>
          {trailPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className="absolute rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: 0, scale: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                left: point.x - 4,
                top: point.y - 4,
                width: Math.max(2, 10 - index * 0.8),
                height: Math.max(2, 10 - index * 0.8),
              }}
            />
          ))}
        </AnimatePresence>
      )}

      {/* Sparkle Cursor */}
      {style === 'sparkle' && (
        <AnimatePresence>
          {trailPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className="absolute text-indigo-400 dark:text-indigo-300 text-xs"
              initial={{ opacity: 1, scale: 0.5, y: 0 }}
              animate={{
                opacity: 0,
                scale: 1.5,
                y: -15,
                x: index % 2 === 0 ? 10 : -10,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ left: point.x - 6, top: point.y - 6 }}
            >
              ✨
            </motion.div>
          ))}
        </AnimatePresence>
      )}

      {/* Orbit Cursor */}
      {style === 'orbit' && (
        <div
          className="absolute"
          style={{ left: mousePosition.x, top: mousePosition.y }}
        >
          <motion.div
            className="absolute h-3 w-3 rounded-full border border-indigo-500 dark:border-indigo-400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            style={{ left: -12, top: -12 }}
          >
            <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-300" />
          </motion.div>
        </div>
      )}

      {/* Main interactive dot */}
      <motion.div
        className="absolute rounded-full bg-indigo-600 dark:bg-indigo-400 mix-blend-difference"
        animate={{
          x: mousePosition.x - (isPointer ? 12 : 6),
          y: mousePosition.y - (isPointer ? 12 : 6),
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
        style={{ width: isPointer ? 24 : 12, height: isPointer ? 24 : 12 }}
      />
    </div>
  );
};

export default CustomCursor;