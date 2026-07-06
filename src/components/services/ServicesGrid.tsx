import { services } from '../../data/services'
import { ServiceCard } from './ServiceCard'
import { Section } from '../layout/Section'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function ServicesGrid() {
  return (
    <Section id="services">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            What We Build
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
            Our <span className="text-white/40">Services</span>
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl">
            From AI to mobile, cloud to cybersecurity — comprehensive technology services for every stage of your journey.
          </p>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:text-white transition-colors shrink-0"
        >
          All Services <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
