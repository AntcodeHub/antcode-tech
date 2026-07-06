import { Hero } from '../../components/hero/Hero'
import { TrustSection } from '../../components/hero/TrustSection'
import { ServicesGrid } from '../../components/services/ServicesGrid'
import { Section } from '../../components/layout/Section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FAQ } from '../../components/faq/FAQ'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <div className="flex flex-col relative">
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50 halftone-bg" />
      
      <Hero />
      <TrustSection />
      
      {/* Technical Proposition */}
      <Section className="bg-white/[0.01] relative overflow-hidden">
         {/* Aurora Background Effect */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none z-0">
            <motion.div 
               style={{ y: y1 }}
               className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" 
            />
            <motion.div 
               style={{ y: y2 }}
               className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" 
            />
         </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
              Architectural Rigor
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-[1.1]">
              We ship code that <br />
              <span className="text-white/40 italic">actually</span> scales.
            </h2>
            <p className="text-muted text-lg mb-12 leading-relaxed max-w-xl">
              AntCode Technology specializes in high-throughput architectures and 
              machine learning pipelines. We don't just build features; we build 
              the infrastructure that makes features possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <h4 className="font-mono text-xs text-white uppercase tracking-widest">Protocol-First</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Prioritizing Type-safety and strict API contracts across all distributed nodes.
                  </p>
               </div>
               <div className="space-y-4">
                  <h4 className="font-mono text-xs text-white uppercase tracking-widest">Zero-Trust</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Integrated security audits at every layer of the application lifecycle.
                  </p>
               </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square glass-card bg-primary/5 border-primary/20 flex items-center justify-center relative overflow-hidden group">
                {/* 3D Network Graph Video Bleed */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                  poster="https://images.pexels.com/videos/3125396/free-video-3125396.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630"
                >
                  <source src="https://videos.pexels.com/video-files/3125396/3125396-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="z-10 font-mono text-[10px] text-primary/60 bg-black/40 px-4 py-2 backdrop-blur-md border border-primary/20">
                   NODE_STREAMS_ACTIVE
                </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <ServicesGrid />
      <FAQ />

      {/* Footer CTA (Asymmetrical) */}
      <Section className="relative py-40 border-t border-white/5 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-8 block">
                 System Ready
               </span>
               <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mb-12 leading-[0.9]">
                 Initialize your <br /> 
                 next <span className="text-white/40">breakthrough.</span>
               </h2>
               <button className="h-16 px-12 bg-primary text-white font-mono uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all group">
                  <span className="group-hover:translate-x-2 transition-transform inline-block">Run Initialization_</span>
               </button>
             </motion.div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full halftone-bg opacity-20 pointer-events-none lg:block hidden" />
        
        {/* Subtle background text */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
           <span className="text-[20vw] font-heading font-bold text-white/[0.02] leading-none">
              EXECUTE
           </span>
        </div>
      </Section>
    </div>
  )
}
