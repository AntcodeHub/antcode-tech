import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Magnetic } from '../ui/Magnetic'
import { Section } from '../layout/Section'

export function FinalCTA() {
  return (
    <Section className="relative py-40 border-t border-white/5 overflow-hidden">
      <div className="absolute " />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-8 block">
            Ready to Start?
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[0.9]">
            Ready to build <br />
            something <span className="text-white/40">incredible?</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-12">
            Whether you need a product built, want to join our community, 
            or learn with Antcode Technologies Academy - we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic>
              <Button asChild variant="primary" size="lg" className="px-10 h-14 rounded-none font-mono uppercase tracking-widest">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </Magnetic>
            <Button asChild variant="secondary" size="lg" className="px-10 h-14 font-mono uppercase tracking-widest">
              <Link to="/community">Join Community</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
