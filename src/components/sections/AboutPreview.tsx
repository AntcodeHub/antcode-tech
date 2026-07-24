
import { Link } from 'react-router-dom'
import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'

const milestones = [
  { id:1, year: '2023', title: 'Founded', description: 'Antcode Technologies born in Douala with a mission to build Africa\'s tech future.' },
  { id:2, year: '2024', title: 'First Products', description: 'Delivered first smart tracking solution for institutions.' },
  { id:3, year: '2024', title: 'Community Launch', description: 'Antcode Technologies Community launched with 100 founding members across the country' },
  { id:4, year: '2025', title: 'Cohort Opens', description: 'Antcode Technologies Cohort begins training the next generation of African engineers.' },
  { id:5, year: '2025', title: 'Open Source Initiative', description: 'Launched multiple open-source projects in GitHub.' },
  { id:6, year: '2026', title: 'Global Expansion', description: 'Expanded operations to 10+ Areas/tech sectors with 500+ community members.' },
]

export function AboutPreview() {
  return (
    <Section id="about" className="bg-white/[0.01]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <ScrollReveal direction="left" className="lg:col-span-5">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Why We Exist
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
            About <span className="text-white/40">Antcode Technologies</span>
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            The world doesn't wait for the cautious.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Every day, the organizations willing to take the risk - to digitalize, to integrate technology, to rebuild how they work - are the ones pulling ahead. The rest stay stuck: manual processes, disconnected systems, decisions made on guesswork instead of data.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            We started AntCode because we watched that gap up close - organizations that wanted to modernize, but couldn't find a technical partner they could actually trust. Freelancers who disappeared after launch. Agencies too slow and too expensive for the reality of building in Africa. Vendors who sold "digital transformation" without ever asking what the business actually needed.
          </p>
          <p className="text-white font-semibold leading-relaxed mb-8">
            We exist to close that gap - with software engineering, data, and AI that's built fast, built to work, and built by a team that stays.
          </p>
          <Link
            to="/about"
            className="font-mono text-xs uppercase tracking-widest text-primary hover:text-white transition-colors"
          >
            Learn More →
          </Link>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-7 relative">
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
