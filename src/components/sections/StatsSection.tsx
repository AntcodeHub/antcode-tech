import { motion } from 'framer-motion'
import { stats } from '../../data/stats'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Section } from '../layout/Section'

export function StatsSection() {
  return (
    <Section className="py-20 lg:py-32 border-y border-white/5 bg-surface/50">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-muted text-sm font-mono uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
