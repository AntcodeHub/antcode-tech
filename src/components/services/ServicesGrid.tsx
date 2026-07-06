import { motion } from 'framer-motion'
import { services } from '../../data/services'
import { ServiceCard } from './ServiceCard'
import { Section } from '../layout/Section'

export function ServicesGrid() {
  return (
    <Section id="services">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Comprehensive Software Solutions
        </h2>
        <p className="text-muted text-lg">
          We combine technical excellence with strategic thinking to deliver 
          software that creates real business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
