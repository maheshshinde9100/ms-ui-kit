import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ title, date, description, dot, active = false }) => (
  <motion.div 
    initial={{ x: -20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-10 border-l border-line last:pb-0"
  >
    <div className={`absolute left-[-7px] top-0.5 w-3.5 h-3.5 rounded-full border-4 border-surface transition-colors duration-300 ${active ? 'bg-accent' : 'bg-line-strong'}`}>
      {dot}
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
      <h4 className="text-[15px] font-semibold text-ink">{title}</h4>
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent-ink">{date}</span>
    </div>
    <p className="text-ink-soft text-[13px] leading-relaxed">{description}</p>
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
