import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Magnetic } from '../ui/Magnetic'

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs font-medium text-text/80 tracking-wide uppercase">
            Innovating the Future of Software
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligent</span> <br />
          Software That Moves <br />
          Businesses Forward
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We design, develop, and scale modern software solutions for startups, 
          enterprises, and organizations worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Magnetic>
            <Button variant="primary" size="lg" className="w-full sm:w-auto group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </Magnetic>
        </motion.div>

        {/* Floating Tech Badges (Optional/Decorative) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-20 hidden 2xl:block opacity-20">
            <div className="glass-card p-4 rotate-12">
                <span className="font-mono text-xs">const innovate = () =&gt; true;</span>
            </div>
        </div>
        <div className="absolute top-1/3 right-0 -translate-y-1/2 translate-x-20 hidden 2xl:block opacity-20">
            <div className="glass-card p-4 -rotate-12">
                <span className="font-mono text-xs">await AntCode.deploy();</span>
            </div>
        </div>
      </div>
    </div>
  )
}
