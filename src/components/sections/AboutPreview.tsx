import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section } from '../layout/Section'

const milestones = [
  { year: '2019', title: 'Founded', description: 'Antcode Technology born in Douala with a mission to build Africa\'s tech future.' },
  { year: '2020', title: 'First Products', description: 'Delivered first enterprise solutions for healthcare and education sectors.' },
  { year: '2021', title: 'Community Launch', description: 'Antcode Technology Community launched with 100 founding members across 5 countries.' },
  { year: '2022', title: 'Academy Opens', description: 'Antcode Technology Academy begins training the next generation of African engineers.' },
  { year: '2023', title: 'Open Source Initiative', description: 'Launched multiple open-source projects, reaching 1K GitHub stars in 6 months.' },
  { year: '2024', title: 'Global Expansion', description: 'Expanded operations to 10+ countries with 500+ community members.' },
]

export function AboutPreview() {
  return (
    <Section id="about" className="bg-white/[0.01]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
            About <span className="text-white/40">Antcode Technology</span>
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            We're building the technology infrastructure Africa needs — 
            from enterprise software to developer communities and education.
          </p>
          <Link
            to="/about"
            className="font-mono text-xs uppercase tracking-widest text-primary hover:text-white transition-colors"
          >
            Learn More →
          </Link>
        </div>

        <div className="lg:col-span-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 md:left-2 top-1 w-3 h-3 bg-primary rounded-full border-2 border-dark-bg hidden md:block" />
                <span className="font-mono text-primary text-sm font-bold">{item.year}</span>
                <h3 className="text-xl font-heading font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
