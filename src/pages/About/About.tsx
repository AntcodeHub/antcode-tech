import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { motion } from 'framer-motion'
import { EcosystemSection } from '../../components/sections/EcosystemSection'
import { StatsSection } from '../../components/sections/StatsSection'

const values = [
  { title: 'Mission', content: 'To build the technology infrastructure Africa needs — empowering businesses, communities, and the next generation of innovators.' },
  { title: 'Vision', content: 'A thriving African technology ecosystem where world-class engineering, education, and community drive sustainable digital transformation.' },
  { title: 'Values', content: 'Excellence, transparency, community-first thinking, open source contribution, and relentless focus on impact over hype.' },
]

const milestones = [
  { year: '2019', title: 'Founded in Douala', desc: 'Antcode Technology born with a mission to build Africa\'s tech future.' },
  { year: '2021', title: 'Community Launch', desc: 'AntCode Community launched across 5 countries.' },
  { year: '2022', title: 'Academy Opens', desc: 'Training the next generation of African engineers.' },
  { year: '2023', title: 'Open Source Initiative', desc: 'Launched multiple open-source projects to the world.' },
  { year: '2024', title: 'Global Expansion', desc: '10+ countries, 500+ community members.' },
]

export default function About() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="About Antcode Technology"
        title={<>Building Africa's <span className="text-white/40">Technology Future</span></>}
        description="Antcode Technology is the home of Africa's technology ecosystem — engineering enterprise solutions, nurturing communities, and training the next generation."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <StatsSection />

      <Section className="bg-surface/30">
        <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">Timeline</span>
        <h2 className="text-4xl font-heading font-bold text-white mb-16">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <div className="space-y-12">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-primary rounded-full border-2 border-dark-bg hidden md:block" />
                <span className="font-mono text-primary font-bold">{item.year}</span>
                <h3 className="text-xl font-heading font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <EcosystemSection />
    </div>
  )
}
