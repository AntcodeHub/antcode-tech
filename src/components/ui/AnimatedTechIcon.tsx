
import { motion } from 'framer-motion';

interface Props {
  type: 'react' | 'python' | 'ai' | 'cloud';
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedTechIcon({ type, delay = 0, className = '', style }: Props) {
  const icons = {
    react: (
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <motion.ellipse
          cx="32" cy="32" rx="12" ry="28"
          stroke="currentColor" strokeWidth="2" fill="none"
          className="text-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '32px', originY: '32px' }}
        />
        <motion.ellipse
          cx="32" cy="32" rx="12" ry="28"
          stroke="currentColor" strokeWidth="2" fill="none"
          className="text-secondary"
          animate={{ rotate: -360 }}
          transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '32px', originY: '32px', transform: 'rotate(60deg)' }}
        />
        <motion.ellipse
          cx="32" cy="32" rx="12" ry="28"
          stroke="currentColor" strokeWidth="2" fill="none"
          className="text-accent"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '32px', originY: '32px', transform: 'rotate(120deg)' }}
        />
        <circle cx="32" cy="32" r="6" fill="currentColor" className="text-primary" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <motion.path
          d="M28 8C16 8 16 18 22 18h12v6H20c-8 0-12 6-12 14s4 14 12 14h6v-6c0-8 6-12 14-12h10c8 0 12-6 12-14s-4-14-12-14H28z"
          fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-400"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay, repeat: Infinity, repeatType: 'loop', repeatDelay: 2 }}
        />
        <motion.path
          d="M36 56c12 0 12-10 6-10H30v-6h14c8 0 12-6 12-14s-4-14-12-14h-6v6c0 8-6 12-14 12H14c-8 0-12 6-12 14s4 14 12 14h22z"
          fill="none" stroke="currentColor" strokeWidth="3" className="text-yellow-400"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: delay + 0.5, repeat: Infinity, repeatType: 'loop', repeatDelay: 2 }}
        />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <rect x="16" y="16" width="32" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400" />
        <motion.circle cx="24" cy="24" r="3" fill="currentColor" className="text-emerald-400"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle cx="40" cy="24" r="3" fill="currentColor" className="text-emerald-400"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle cx="24" cy="40" r="3" fill="currentColor" className="text-emerald-400"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.circle cx="40" cy="40" r="3" fill="currentColor" className="text-emerald-400"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
        <line x1="32" y1="16" x2="32" y2="8" stroke="currentColor" strokeWidth="2" className="text-emerald-400" />
        <line x1="32" y1="48" x2="32" y2="56" stroke="currentColor" strokeWidth="2" className="text-emerald-400" />
        <line x1="16" y1="32" x2="8" y2="32" stroke="currentColor" strokeWidth="2" className="text-emerald-400" />
        <line x1="48" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="2" className="text-emerald-400" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 64 64" className="w-12 h-12">
        <motion.path
          d="M20 44c-4.4 0-8-3.6-8-8s3.6-8 8-8c.6-5.5 5.2-9.8 10.8-9.8 4.3 0 8 2.5 9.8 6.2 1.4-.4 2.8-.6 4.2-.6 6.6 0 12 5.4 12 12s-5.4 12-12 12H20z"
          fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400"
        />
        <motion.circle cx="32" cy="28" r="2" fill="currentColor" className="text-sky-400"
          animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line x1="32" y1="46" x2="32" y2="56" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"
          className="text-sky-400"
          animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      className={`absolute glass-card p-3 border-white/10 text-white/80 hover:text-white transition-colors ${className}`}
      style={style}
    >
      {icons[type]}
      <span className="block text-[10px] font-mono uppercase tracking-widest text-center mt-1">{type}</span>
    </motion.div>
  );
}