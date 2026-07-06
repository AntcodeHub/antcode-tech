import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { openSourceProjects } from '../../data/openSource'
import { Star, GitFork, ExternalLink } from 'lucide-react'

export default function OpenSource() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Open Source"
        title={<>Built in the <span className="text-white/40">Open</span></>}
        description="Tools, frameworks, and libraries we build and maintain for the global developer community."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openSourceProjects.map((project, i) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                <ExternalLink size={18} className="text-white/20 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted leading-relaxed mb-6">{project.description}</p>
              <div className="flex items-center gap-6 text-sm font-mono text-muted">
                <span className="flex items-center gap-1.5"><Star size={14} className="text-warning" /> {project.stars.toLocaleString()}</span>
                <span className="flex items-center gap-1.5"><GitFork size={14} /> {project.forks}</span>
                <span className="px-2 py-0.5 bg-white/5 rounded text-[10px] uppercase">{project.language}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <div className="text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Contribute to Open Source</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
            Join our community of developers building tools and frameworks for the global developer community.
          </p>
          <Button variant="primary" className="font-mono uppercase tracking-widest text-xs">
            View All Projects on GitHub
          </Button>
        </div>
      </Section>
    </div>
  )
}
