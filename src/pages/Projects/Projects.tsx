import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { projects } from '../../data/projects'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye } from 'lucide-react'
import { Modal } from '../../components/ui/Modal'
import { Button } from '../../components/ui/Button'
import { MarkdownContent } from '../Blog/BlogPost'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <div className="flex flex-col">
      <PageHero
        label="Projects"
        title={<>Engineering <span className="text-white/40">Excellence</span></>}
        description="A showcase of products and platforms we've built for clients across Africa and beyond."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-primary bg-black/60 px-3 py-1 backdrop-blur-sm">{project.category}</span>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-4 right-4 bg-primary/90 hover:bg-primary text-white p-2 rounded-lg transition-colors"
                >
                  <Eye size={16} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-3">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono uppercase text-white/40 bg-white/5 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-6 pt-4 border-t border-white/5">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-[10px] font-mono uppercase text-white/30">{key}</p>
                      <p className="text-sm font-mono text-primary font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="text-center bg-surface/30">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:text-white transition-colors">
          View Case Studies <ArrowRight size={16} />
        </Link>
      </Section>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded">{selectedProject.category}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="text-[10px] font-mono uppercase text-white/60 bg-white/5 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-lg">
              {Object.entries(selectedProject.metrics).map(([key, value]) => (
                <div key={key}>
                  <p className="text-[10px] font-mono uppercase text-white/30">{key}</p>
                  <p className="text-sm font-mono text-primary font-bold">{value}</p>
                </div>
              ))}
            </div>
            <MarkdownContent content={selectedProject.fullDescription} />
            <div className="flex gap-4 pt-4">
              <Button asChild variant="primary" className="font-mono uppercase tracking-widest text-xs">
                <Link to="/contact">Discuss Project</Link>
              </Button>
              <Button asChild variant="secondary" className="font-mono uppercase tracking-widest text-xs">
                <Link to="/case-studies">View Case Study</Link>
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
