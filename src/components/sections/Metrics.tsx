import { motion } from 'framer-motion'
import { metrics } from '../../data/clients'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Metrics() {
  return (
    <div className="py-24">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-muted text-sm font-mono uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-2xl mt-2">{metric.icon}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
