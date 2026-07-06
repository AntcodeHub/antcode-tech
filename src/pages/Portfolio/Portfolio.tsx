import { Section } from '../../components/layout/Section'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="bg-white/[0.02] py-24 border-b border-white/5 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-8"
          >
            Our Work <br />
            <span className="text-primary">Speaks for Itself</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted leading-relaxed"
          >
            A curated selection of digital products we've designed and engineered 
            for forward-thinking companies.
          </motion.p>
        </div>
      </div>

      {/* Projects Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="w-12 h-12 rounded-full bg-white text-dark-bg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-dark-bg transition-colors">
                    <SiGithub size={20} />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-text/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats / Impact Section */}
      <Section className="bg-primary/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-heading font-bold text-white mb-4">50M+</div>
            <p className="text-muted uppercase tracking-widest text-sm">Users Impacted</p>
          </div>
          <div>
            <div className="text-5xl font-heading font-bold text-white mb-4">$2B+</div>
            <p className="text-muted uppercase tracking-widest text-sm">Transactions Processed</p>
          </div>
          <div>
            <div className="text-5xl font-heading font-bold text-white mb-4">15+</div>
            <p className="text-muted uppercase tracking-widest text-sm">Industries Served</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
