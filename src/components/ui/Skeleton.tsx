import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular'
  width?: string | number
  height?: string | number
}

export function Skeleton({ className = '', variant = 'rectangular', width, height }: SkeletonProps) {
  const variantClasses = {
    text: 'rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full'
  }

  return (
    <motion.div
      className={`bg-white/10 ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="glass-card p-6 space-y-4">
      <Skeleton variant="circular" width={44} height={44} />
      <Skeleton variant="text" width="70%" height={24} />
      <Skeleton variant="text" width="100%" height={16} />
      <Skeleton variant="text" width="60%" height={16} />
      <div className="flex gap-2 pt-4">
        <Skeleton variant="rectangular" width={60} height={24} />
        <Skeleton variant="rectangular" width={60} height={24} />
      </div>
    </div>
  )
}

export function BlogCardSkeleton() {
  return (
    <div className="glass-card overflow-hidden">
      <Skeleton variant="rectangular" width="100%" height={200} className="rounded-t-lg" />
      <div className="p-6 space-y-4">
        <Skeleton variant="text" width="40%" height={16} />
        <Skeleton variant="text" width="90%" height={24} />
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="80%" height={16} />
      </div>
    </div>
  )
}
