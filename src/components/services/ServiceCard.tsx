import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  technologies: string[]
  compact?: boolean
}

export function ServiceCard({ title, description, icon: Icon, technologies, compact }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative flex flex-col h-full glass-card p-4 sm:p-6 lg:p-8 transition-all hover:border-primary/30"
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 border border-primary/20 group-hover:scale-110 transition-transform">
        <Icon size={20} className="text-primary sm:size-22" />
      </div>

      <h3 className={`font-heading font-bold text-white mb-2 sm:mb-3 leading-tight ${compact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}>
        {title}
      </h3>
      <p className={`text-muted leading-relaxed mb-4 sm:mb-5 ${compact ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'}`}>
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
        {technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-white/5 border border-white/10 rounded text-[9px] sm:text-[10px] font-mono text-white/40 uppercase tracking-wider">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/5">
        <Link to="/services" className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-1">
          Learn More <ArrowRight size={10} className="sm:size-12" />
        </Link>
        <Link to="/contact" className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-white transition-colors">
          Estimate Project
        </Link>
      </div>
    </motion.div>
  )
}
