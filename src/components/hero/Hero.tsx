import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Magnetic } from '../ui/Magnetic'

export function Hero() {
  return (
    <div className="relative min-h-[100vh] flex items-center halftone-bg overflow-hidden pt-20">
      {/* Dramatic Spotlight */}
      <div className="absolute top-[-20%] left-[10%] w-[60%] h-[120%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left Side: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="mb-6"
          >
            <span className="font-mono text-primary text-xs uppercase tracking-widest border-l-2 border-primary pl-4">
              Production-ready architectures
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-heading font-bold text-white mb-8 leading-[0.95]"
          >
            Engineering <br />
            systems <br />
            that scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted max-w-md mb-12 leading-relaxed font-body"
          >
            AntCode Technology ships production-ready architectures for web, 
            data, and machine learning. No fluff, just pure engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Magnetic>
              <Button variant="primary" size="lg" className="px-10 h-14 rounded-none font-mono uppercase tracking-widest">
                Initialize project
              </Button>
            </Magnetic>
            <button className="text-sm font-mono text-white/40 hover:text-white transition-colors flex items-center space-x-2">
              <span>View technical specs</span>
              <span className="text-lg">→</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Browser Mockup Bleed */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
            className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[150%] aspect-video lg:aspect-square [perspective:1000px]"
          >
            <div className="w-full h-full bg-[#0D0D0D] border border-white/10 rounded-tl-2xl shadow-2xl overflow-hidden glass-highlight group">
              {/* Browser Chrome */}
              <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-grow flex justify-center">
                  <div className="bg-white/5 px-6 py-1 rounded text-[10px] font-mono text-white/30 truncate max-w-xs">
                    antcode.tech/architecture/edge-compute
                  </div>
                </div>
              </div>
              
              {/* Content: Code Editor Image */}
              <div className="p-1 h-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85" 
                  alt="AntCode Architecture - Riku Lu on Unsplash"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating UI Elements over image */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-20 left-20 glass-card px-4 py-2 border-primary/20 bg-primary/5"
                >
                   <span className="text-[10px] font-mono text-primary uppercase tracking-widest">DEPLOY_ACTIVE</span>
                </motion.div>
                
                <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-40 right-20 glass-card px-4 py-2 border-white/10"
                >
                   <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">LATENCY: 14ms</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-bg to-transparent z-20" />
      
      {/* Scroll Indicator */}
      <motion.div 
         animate={{ y: [0, 10, 0] }}
         transition={{ duration: 2, repeat: Infinity }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
      >
         <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/20 mb-4">SCROLL_FOR_INTEL</span>
         <div className="w-px h-12 bg-white/10 relative">
            <motion.div 
               animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 w-full h-1/3 bg-primary" 
            />
         </div>
      </motion.div>
    </div>
  )
}
