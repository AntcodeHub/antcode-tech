import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { VideoBackground } from '../backgrounds/VideoBackground';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
      <VideoBackground />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center py-12 md:py-20 lg:py-32">
          

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 100 }}
            className="text-6xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[100px] font-heading font-bold text-white mb-8 md:mb-12 lg:mb-16 leading-[1.1]"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              TRANSFORMING YOUR
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              BUSINESS CHALLENGES
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 200 }}
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block"
            >
              INTO DIGITAL SOLUTIONS.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-base md:text-lg text-muted max-w-3xl mb-8 md:mb-12 leading-relaxed"
          >
            <span className="block md:hidden">
              The world is evolving faster than ever. Organizations that embrace digital transformation are becoming more efficient, more competitive, and better prepared for the future.
            </span>
            <span className="hidden md:block">
              The world is evolving faster than ever. Organizations that embrace digital transformation are becoming more efficient, more competitive, and better prepared for the future. The question is: how ready is your organization? Together, let's modernize, automate your workflows, and harness the power of data and AI to help your business grow and scale.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
          >
            <Magnetic>
              <Button asChild variant="primary" size="lg" className="px-6 md:px-8 h-12 md:h-14 font-mono uppercase tracking-widest text-sm md:text-base">
                <Link to="/contact">Start Project</Link>
              </Button>
            </Magnetic>
            <Button asChild variant="secondary" size="lg" className="px-6 md:px-8 h-12 md:h-14 font-mono uppercase tracking-widest text-sm md:text-base">
              <Link to="/community">Join Community</Link>
            </Button>
            <button className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/40 hover:text-white transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <Play size={14} className="text-primary ml-0.5" />
              </span>
              <span className="hidden sm:inline">Watch Demo</span>
              <span className="sm:hidden">Demo</span>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-bg to-transparent z-20" />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center hidden md:flex"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/20 mb-4">Scroll</span>
        <div className="w-px h-12 bg-white/10 relative">
          <motion.div
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 w-full h-1/3 bg-primary"
          />
        </div>
      </motion.div>
    </div>
  );
}