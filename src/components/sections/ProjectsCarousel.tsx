import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { Section } from '../layout/Section'

export function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
            Featured <span className="text-white/40">Projects</span>
          </h2>
        </div>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:text-white transition-colors"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar snap-x snap-mandatory -mx-6 px-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-start"
          >
            <div className="glass-card group overflow-hidden h-full hover:border-primary/30 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-primary bg-black/60 px-3 py-1 backdrop-blur-sm border border-primary/20">
                  {project.category}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-heading font-bold text-white">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono uppercase tracking-wider text-white/40 bg-white/5 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 pt-2 border-t border-white/5">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-[10px] font-mono uppercase text-white/30">{key}</p>
                      <p className="text-sm font-mono text-primary font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
