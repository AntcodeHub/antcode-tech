import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { industries } from '../../data/industries'

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Industries"
        title={<>Serving Africa's <span className="text-white/40">Key Sectors</span></>}
        description="Deep industry expertise combined with cutting-edge technology to solve sector-specific challenges."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <industry.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">{industry.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Don't See Your Industry?</h2>
        <p className="text-muted max-w-lg mx-auto mb-8">We adapt our expertise to any sector. Let's talk about your specific needs.</p>
        <Button asChild variant="primary" size="lg" className="font-mono uppercase tracking-widest">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </Section>
    </div>
  )
}
