import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ecosystemUnits } from '../../data/ecosystem'
import { Section } from '../layout/Section'

export function EcosystemSection() {
  return (
    <Section id="ecosystem">
      <div className="mb-16">
        <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
          The Ecosystem
        </span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
          Our <span className="text-white/40">Ecosystem</span>
        </h2>
        <p className="text-muted text-lg mt-6 max-w-2xl">
          Antcode Technologies is more than a technology company - it's a complete ecosystem 
          powering Africa's digital transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecosystemUnits.map((unit, index) => (
          <motion.div
            key={unit.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Link
              to={unit.href}
              className="group block glass-card p-8 h-full hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10"
                  style={{ backgroundColor: `${unit.accent}15` }}
                >
                  <unit.icon size={24} style={{ color: unit.accent }} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {unit.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{unit.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
