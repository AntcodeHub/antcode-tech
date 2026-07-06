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
        <div className="relative border-b border-white/10 min-h-[600px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative spec-row group cursor-none px-6 lg:px-12 h-32 lg:h-48 border-b border-white/5"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <div className="flex items-center space-x-12 w-full relative z-20">
                <span className="font-mono text-white/10 text-sm hidden lg:block group-hover:text-primary transition-colors">
                  SYSTEM_NODE_0{index + 1}
                </span>
                <div className="flex-grow">
                  <h3 className={cn(
                    "text-4xl lg:text-7xl font-heading font-bold transition-all duration-700 uppercase tracking-tighter",
                    hoveredIndex === index ? "text-primary translate-x-8" : "text-white/20"
                  )}>
                    {project.title}
                  </h3>
                </div>
                <div className="text-right hidden md:block opacity-40 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2">Protocol_Domain</p>
                  <p className="text-white font-medium uppercase text-xs">{project.category}</p>
                </div>
              </div>
              
              {/* Background Scanline for Hover */}
              <div className={cn(
                "absolute inset-0 bg-primary/[0.02] opacity-0 transition-opacity duration-500",
                hoveredIndex === index && "opacity-100"
              )}>
                 <div className="scanline" />
              </div>
            </motion.div>
          ))}

          {/* Hover Preview Image / Technical HUD */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 20 }}
                className="fixed right-20 top-1/2 -translate-y-1/2 pointer-events-none z-50 w-[500px] aspect-video"
              >
                <div className="w-full h-full glass-card border-primary/20 bg-black/40 overflow-hidden shadow-2xl relative">
                  <img 
                    src={projects[hoveredIndex].image} 
                    alt={projects[hoveredIndex].title}
                    className="w-full h-full object-cover grayscale brightness-50 opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* HUD Overlays */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                        <div className="space-y-1">
                           <p className="font-mono text-[8px] text-primary uppercase tracking-[0.3em]">Live_Telemetry</p>
                           <h4 className="text-xl font-heading font-bold text-white uppercase">{projects[hoveredIndex].title}</h4>
                        </div>
                        <div className="text-right">
                           <div className="w-12 h-px bg-primary/40 mb-2 ml-auto" />
                           <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Active_Node</p>
                        </div>
                     </div>

                     <div className="grid grid-cols-3 gap-4">
                        {Object.entries(projects[hoveredIndex].metrics || {}).map(([key, val]) => (
                           <div key={key} className="space-y-1 border-l border-primary/20 pl-4">
                              <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest">{key}</p>
                              <p className="text-lg font-heading font-bold text-white">{val as string}</p>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  {/* Corner brackets */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary/40" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-primary/40" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-primary/40" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary/40" />
                </div>
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
