import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'

const milestones = [
  { id:1, year: '2023', title: 'Founded', description: 'Antcode Technology born in Douala with a mission to build Africa\'s tech future.' },
  { id:2, year: '2024', title: 'First Products', description: 'Delivered first smart tracking solution for institutions.' },
  { id:3, year: '2024', title: 'Community Launch', description: 'Antcode Technology Community launched with 100 founding members across the country' },
  { id:4, year: '2025', title: 'Cohort Opens', description: 'Antcode Technology Cohort begins training the next generation of African engineers.' },
  { id:5, year: '2025', title: 'Open Source Initiative', description: 'Launched multiple open-source projects in GitHub.' },
  { id:6, year: '2026', title: 'Global Expansion', description: 'Expanded operations to 10+ Areas/tech sectors with 500+ community members.' },
]

export function AboutPreview() {
  return (
    <Section id="about" className="bg-white/[0.01]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <ScrollReveal direction="left" className="lg:col-span-4">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
            About <span className="text-white/40">Antcode Technology</span>
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            We're building the technology infrastructure Africa needs
            from enterprise software to developer communities and education.
          </p>
          <Link
            to="/about"
            className="font-mono text-xs uppercase tracking-widest text-primary hover:text-white transition-colors"
          >
            Learn More →
          </Link>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1} direction="right" className="relative pl-12 md:pl-16">
                <div className="absolute left-2.5 md:left-2 top-1 w-3 h-3 bg-primary rounded-full border-2 border-dark-bg hidden md:block" />
                <span className="font-mono text-primary text-sm font-bold">{item.year}</span>
                <h3 className="text-xl font-heading font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
