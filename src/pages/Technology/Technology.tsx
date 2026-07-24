import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { projects } from '../../data/projects'
import { ServiceCard } from '../../components/services/ServiceCard'

export default function Technology() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Antcode Technologies"
        title={<>Enterprise Engineering <span className="text-white/40">Agency</span></>}
        description="We design, build, and scale production-grade software for organizations across Africa and beyond."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Client Satisfaction', value: '95%' },
            { label: 'Countries Served', value: '10+' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-8 text-center">
              <p className="text-4xl font-heading font-bold text-white">{stat.value}</p>
              <p className="text-[10px] font-mono uppercase text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-white mb-2">Our Services</h2>
          <p className="text-muted">Comprehensive technology solutions for every business need.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.slice(0, 6).map((service, i) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <ServiceCard {...service} compact />
            </motion.div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-white mb-2">Portfolio</h2>
          <p className="text-muted">Selected projects showcasing our engineering capabilities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card overflow-hidden group hover:border-primary/30 transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono uppercase text-primary">{project.category}</span>
                <h3 className="text-xl font-heading font-bold text-white mt-1">{project.title}</h3>
                <p className="text-muted text-sm mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Book a Consultation</h2>
        <p className="text-muted max-w-lg mx-auto mb-8">Let's discuss your project requirements and how Antcode Technologies can help.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="primary" size="lg" className="font-mono uppercase tracking-widest">
            <Link to="/contact">Book Meeting</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="font-mono uppercase tracking-widest">
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}
