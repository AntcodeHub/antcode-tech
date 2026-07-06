import { Section } from '../../components/layout/Section'
import { motion } from 'framer-motion'
import { TerminalForm } from '../../components/contact/TerminalForm'

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="pt-40 pb-24 halftone-bg border-b border-white/5">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Initialize Handshake
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading font-bold text-white mb-8"
          >
            LET'S <br />
            TALK.
          </motion.h1>
          <p className="text-xl text-muted leading-relaxed">
            Reach out through our secure interface or via traditional channels.
          </p>
        </div>
      </div>

      <Section>
        <div className="mb-20">
          <h2 className="text-center font-mono text-xs uppercase tracking-[0.5em] text-white/20 mb-12">
            Command Line Interface
          </h2>
          <TerminalForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
           <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase text-white/30 tracking-widest">Protocol</p>
              <h4 className="text-xl font-heading font-bold text-white">Direct Mail</h4>
              <a href="mailto:ops@antcode.tech" className="text-muted hover:text-primary transition-colors">ops@antcode.tech</a>
           </div>
           <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase text-white/30 tracking-widest">Latency</p>
              <h4 className="text-xl font-heading font-bold text-white">Real-time</h4>
              <p className="text-muted">+1 (555) 000-0000</p>
           </div>
           <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase text-white/30 tracking-widest">Locality</p>
              <h4 className="text-xl font-heading font-bold text-white">Silicon Valley</h4>
              <p className="text-muted">Node 0x1A2B, CA</p>
           </div>
        </div>
      </Section>
    </div>
  )
}
