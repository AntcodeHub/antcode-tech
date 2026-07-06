import { useState } from 'react'
import { Section } from '../../components/layout/Section'
import { projects } from '../../data/projects'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function Portfolio() {
  const [hoveredIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="pt-40 pb-24 halftone-bg border-b border-white/5">
        <div className="container-custom">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Selected Works
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[0.85] tracking-tighter">
            PROVEN <br /> SYSTEMS.
          </h1>
        </div>
      </div>

      {/* Hover List Portfolio */}
      <Section container={false} className="py-0 lg:py-0">
        <div className="relative border-b border-white/10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative spec-row group cursor-none px-6 lg:px-12 h-32 lg:h-48 border-b border-white/5"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <div className="flex items-center space-x-12 w-full">
                <span className="font-mono text-white/20 text-sm hidden lg:block">
                  0{index + 1}
                </span>
                <div className="flex-grow">
                  <h3 className={cn(
                    "text-4xl lg:text-7xl font-heading font-bold transition-all duration-500",
                    hoveredIndex === index ? "text-primary translate-x-4" : "text-white/40"
                  )}>
                    {project.title}
                  </h3>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Metrics</p>
                  <p className="text-white font-medium">{project.category}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Hover Preview Image */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                className="fixed pointer-events-none z-50 w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/20"
                style={{
                    left: '55%',
                    top: '35%',
                    transform: 'translate(-50%, -50%)'
                }}
              >
                <img 
                  src={projects[hoveredIndex].image} 
                  alt={projects[hoveredIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Case Study Callout */}
      <Section className="bg-white/[0.02]">
         <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white max-w-2xl">
              Building for scale is an <span className="text-primary italic">engineering</span> challenge.
            </h2>
            <div className="w-full lg:w-auto">
               <button className="h-16 px-12 bg-white text-black font-heading font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                  View Case Study
               </button>
            </div>
         </div>
      </Section>
    </div>
  )
}
