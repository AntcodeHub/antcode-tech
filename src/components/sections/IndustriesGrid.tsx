import { motion } from 'framer-motion'
import { industries } from '../../data/industries'
import { Section } from '../layout/Section'

export function IndustriesGrid() {
  return (
    <Section id="industries" className="bg-surface/30">
      <div className="mb-16 text-center">
        <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
          Sectors
        </span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
          Industries We <span className="text-white/40">Serve</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 cursor-default"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <industry.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{industry.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
