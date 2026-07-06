import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AuroraBackground } from '../backgrounds/AuroraBackground';
import { ParticleBackground } from '../backgrounds/ParticleBackground';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';
import { Play } from 'lucide-react';
import { AnimatedTechIcon } from '../ui/AnimatedTechIcon';

// Define positions for tech icons with their type
const floatingTech = [
  { type: 'react' as const, x: '10%', y: '20%', delay: 0 },
  { type: 'python' as const, x: '85%', y: '15%', delay: 0.5 },
  { type: 'ai' as const, x: '75%', y: '70%', delay: 1 },
  { type: 'cloud' as const, x: '15%', y: '75%', delay: 1.5 },
];

export function Hero() {
  return (
    <div className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
      <AuroraBackground />
      <ParticleBackground />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="font-mono text-primary text-xs uppercase tracking-[0.3em] border-l-2 border-primary pl-4">
              Africa's Technology Ecosystem
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[0.95]"
          >
            Building Africa's <br />
            Future Through <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technology.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted max-w-lg mb-12 leading-relaxed"
          >
            Antcode Technology is the home of Africa's technology ecosystem — engineering 
            enterprise solutions, nurturing communities, and training the next 
            generation of builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
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

        {/* Right side – animated SVG tech icons */}
        <div className="lg:col-span-5 relative hidden lg:block">
          {floatingTech.map((tech) => (
            <AnimatedTechIcon
              key={tech.type}
              type={tech.type}
              delay={tech.delay}
              // Pass inline styles for positioning
              style={{ left: tech.x, top: tech.y }}
            />
          ))}

          {/* Central Animated Antcode Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg viewBox="0 0 200 200" className="w-64 h-64">
              {/* Rotating outer ring */}
              <motion.circle
                cx="100" cy="100" r="90"
                fill="none" stroke="currentColor" strokeWidth="1"
                className="text-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '100px', originY: '100px' }}
              />
              {/* Pulsing middle ring */}
              <motion.circle
                cx="100" cy="100" r="70"
                fill="none" stroke="currentColor" strokeWidth="1.5"
                className="text-secondary/40"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Inner solid circle */}
              <circle cx="100" cy="100" r="50" fill="currentColor" className="text-primary/10" />
              {/* Antcode 'A' */}
              <text
                x="100" y="120"
                textAnchor="middle"
                fill="white"
                fontSize="80"
                fontWeight="bold"
                fontFamily="var(--font-heading)"
                className="opacity-80"
              >
                A
              </text>
              {/* Orbiting particles */}
              {[...Array(6)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="3"
                  fill="white"
                  className="text-primary"
                  initial={{ pathLength: 0 }}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.5,
                  }}
                  style={{
                    offsetPath: `path('M 100, 30 A 70,70 0 1,1 99.9,30')`,
                    offsetRotate: '0deg',
                  }}
                />
              ))}
            </svg>
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