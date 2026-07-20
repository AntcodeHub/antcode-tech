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
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center py-32">
          

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 100 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-heading font-bold text-white mb-16 leading-[0.9]"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building Africa's
            </motion.span>{' '}
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Future Through
            </motion.span>{' '}
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 200 }}
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              Technology.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted max-w-2xl mb-16 leading-relaxed"
          >
            Antcode Technology is the home of Africa's technology ecosystem engineering 
            enterprise solutions, nurturing communities, and training the next 
            generation of builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Magnetic>
              <Button asChild variant="primary" size="lg" className="px-8 h-14 font-mono uppercase tracking-widest">
                <Link to="/contact">Start Project</Link>
              </Button>
            </Magnetic>
            <Button asChild variant="secondary" size="lg" className="px-8 h-14 font-mono uppercase tracking-widest">
              <Link to="/community">Join Community</Link>
            </Button>
            <button className="flex items-center gap-2 text-sm font-mono text-white/40 hover:text-white transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <Play size={14} className="text-primary ml-0.5" />
              </span>
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-bg to-transparent z-20" />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
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