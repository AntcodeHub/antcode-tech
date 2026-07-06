import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { projects } from '../../data/projects'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'

export default function CaseStudies() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Case Studies"
        title={<>Real Results, <span className="text-white/40">Real Impact</span></>}
        description="Deep dives into how we've helped organizations solve complex technology challenges."
      />

      <Section>
        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video glass-card overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary">{project.category}</span>
                <h2 className="text-3xl font-heading font-bold text-white">{project.title}</h2>
                <p className="text-muted leading-relaxed">{project.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="glass-card p-4 text-center">
                      <p className="text-lg font-heading font-bold text-primary">{value}</p>
                      <p className="text-[10px] font-mono uppercase text-muted mt-1">{key}</p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="font-mono uppercase tracking-widest text-xs">
                  <Link to="/contact">Start Similar Project</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
