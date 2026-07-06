import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { Cpu, Globe, ShieldCheck, Cloud, Smartphone, Database } from 'lucide-react'

const solutions = [
  { icon: Cpu, title: 'AI & Machine Learning', description: 'Custom ML models, LLM integrations, intelligent automation, and data pipelines.', href: '/services' },
  { icon: Globe, title: 'Web Platforms', description: 'Scalable web applications, SaaS products, and enterprise portals.', href: '/services' },
  { icon: Smartphone, title: 'Mobile Solutions', description: 'Cross-platform and native mobile apps for iOS and Android.', href: '/services' },
  { icon: ShieldCheck, title: 'Security & Compliance', description: 'Security audits, penetration testing, and compliance frameworks.', href: '/services' },
  { icon: Cloud, title: 'Cloud Infrastructure', description: 'Cloud migration, DevOps, and infrastructure as code.', href: '/services' },
  { icon: Database, title: 'Data & Analytics', description: 'Data warehouses, BI dashboards, and predictive analytics.', href: '/services' },
]

export default function Solutions() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Solutions"
        title={<>Technology Solutions for <span className="text-white/40">Every Challenge</span></>}
        description="End-to-end technology solutions tailored to your business goals and industry requirements."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <solution.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">{solution.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{solution.description}</p>
              <Link to={solution.href} className="text-[10px] font-mono uppercase tracking-widest text-primary hover:text-white transition-colors">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Need a Custom Solution?</h2>
        <p className="text-muted max-w-lg mx-auto mb-8">Tell us about your challenge and we'll design the right approach.</p>
        <Button asChild variant="primary" size="lg" className="font-mono uppercase tracking-widest">
          <Link to="/contact">Get Started</Link>
        </Button>
      </Section>
    </div>
  )
}
