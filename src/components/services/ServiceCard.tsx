import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: any
  technologies: string[]
}

export function ServiceCard({ title, description, icon: Icon, technologies }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative flex flex-col h-full bg-white/[0.03] border border-white/5 p-12 transition-all hover:bg-white/[0.05] glass-highlight"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
        <Icon size={24} className="text-primary" />
      </div>

      <h3 className="text-3xl font-heading font-bold text-white mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-muted text-lg leading-relaxed mb-10">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mt-auto">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[10px] font-mono text-white/50 uppercase tracking-widest">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
