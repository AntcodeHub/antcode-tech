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
      <Section className="bg-white/[0.02] border-t border-white/5">
         <div className="mb-20">
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">Deep_Architecture_Scan</span>
            <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white tracking-tighter uppercase text-balance">
               Blueprint <br />
               <span className="text-white/20">Analysis.</span>
            </h2>
         </div>

         {/* Asymmetric Bento Box Architecture */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-[300px] lg:auto-rows-[400px]">
            {/* Box 1: Edge Network Visual */}
            <div className="lg:col-span-8 glass-card border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/[0.03] halftone-bg z-0" />
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
               >
                 <source src="https://videos.pexels.com/video-files/6909831/6909831-hd_1920_1080_25fps.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                  <div>
                     <span className="font-mono text-[10px] text-primary uppercase tracking-[0.4em]">01_Global_Edge_Network</span>
                     <h3 className="text-4xl font-heading font-bold text-white mt-4 uppercase">Distributed <br /> Consensus.</h3>
                  </div>
                  <div className="flex gap-12">
                     <div className="space-y-1">
                        <p className="font-mono text-[10px] text-white/20 uppercase">Nodes</p>
                        <p className="text-2xl font-bold text-white">12,400+</p>
                     </div>
                     <div className="space-y-1">
                        <p className="font-mono text-[10px] text-white/20 uppercase">Latency</p>
                        <p className="text-2xl font-bold text-white">&lt; 12ms</p>
                     </div>
                  </div>
               </div>
               {/* Corner Brackets */}
               <div className="absolute top-8 right-8 font-mono text-[10px] text-white/20">[ AUTO_SCALE: ON ]</div>
            </div>

            {/* Box 2: Compute Pipeline */}
            <div className="lg:col-span-4 glass-card border-white/5 bg-primary/5 flex flex-col justify-center p-12 space-y-12">
               <div>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-[0.4em]">02_Pipeline</span>
                  <h3 className="text-3xl font-heading font-bold text-white mt-4 uppercase text-balance">Neural <br /> Compute <br /> Stack.</h3>
               </div>
               <div className="space-y-6">
                  {[
                    { label: 'Ingestion', tech: 'Kafka / gRPC' },
                    { label: 'Process', tech: 'Rust Neural Core' },
                    { label: 'Storage', tech: 'Vector / PG' }
                  ].map((step) => (
                    <div key={step.label} className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="font-mono text-[10px] text-white/40 uppercase">{step.label}</span>
                       <span className="font-mono text-[10px] text-primary uppercase font-bold">{step.tech}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Box 3: Security Structure */}
            <div className="lg:col-span-5 glass-card border-white/5 relative overflow-hidden group">
               <img 
                  src="https://images.unsplash.com/photo-1707730376818-a7a02fe896d5?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85" 
                  alt="Security Structure"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 opacity-40 group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                  <span className="font-mono text-[10px] text-primary uppercase tracking-[0.4em]">03_Security</span>
                  <h3 className="text-3xl font-heading font-bold text-white mt-4 uppercase">Post-Quantum <br /> Shield.</h3>
               </div>
            </div>

            {/* Box 4: Live Code Snippet */}
            <div className="lg:col-span-7 glass-card border-white/5 bg-black p-8 font-mono text-xs overflow-hidden">
               <div className="h-8 border-b border-white/10 flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                  <div className="w-2 h-2 rounded-full bg-green-500/40" />
                  <span className="ml-4 text-white/20 uppercase tracking-widest text-[8px]">consensus_engine.rs</span>
               </div>
               <div className="text-white/60 space-y-2">
                  <p><span className="text-primary">pub async fn</span> initialize_consensus() {"{"}</p>
                  <p className="pl-4 text-white/40">{"// Secure Handshake initialization"}</p>
                  <p className="pl-4"><span className="text-primary">let</span> node_id = Node::new().generate_identity();</p>
                  <p className="pl-4"><span className="text-primary">await!</span> node_id.broadcast_presence();</p>
                  <p className="pl-4 text-white/40">{"// Protocol-Level Enforcement"}</p>
                  <p className="pl-4">node_id.enforce_policy(Policy::<span className="text-primary">ZeroTrust</span>);</p>
                  <p>{"}"}</p>
               </div>
               <div className="absolute bottom-4 right-8 text-[8px] text-white/10 uppercase tracking-[0.3em]">Compiled_Success_v4.2</div>
            </div>
         </div>
      </Section>
    </div>
  )
}
