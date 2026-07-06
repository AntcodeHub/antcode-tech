import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface PageHeroProps {
  label: string
  title: React.ReactNode
  description?: string
  className?: string
}

export function PageHero({ label, title, description, className }: PageHeroProps) {
  return (
    <div className={cn('pt-40 pb-24 border-b border-white/5 relative overflow-hidden', className)}>
      <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            {label}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-muted text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
