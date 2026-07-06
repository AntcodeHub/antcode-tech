import { motion } from 'framer-motion'
import { processSteps } from '../../data/process'
import { Section } from '../layout/Section'

export function ProcessTimeline() {
  return (
    <Section id="process">
      <div className="mb-16 text-center">
        <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
          How We Work
        </span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
          Our <span className="text-white/40">Process</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              <div className="hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-bg z-10" />
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-all group mt-0 lg:mt-12">
                <span className="font-mono text-primary text-xs mb-3 block">{step.step}</span>
                <h4 className="font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-muted text-xs leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
