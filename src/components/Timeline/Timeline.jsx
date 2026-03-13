import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ title, date, description, dot, active = false }) => (
  <motion.div 
    initial={{ x: -20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-10 border-l-2 border-gray-100 dark:border-gray-800 last:pb-0"
  >
    <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 border-white dark:border-gray-950 transition-colors duration-300 ${active ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}>
      {dot}
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h4>
      <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">{date}</span>
    </div>
    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Timeline = ({ items = [], className = '' }) => {
  return (
    <div className={`space-y-0 ${className}`}>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
