import { Section } from '../../components/layout/Section'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="flex flex-col relative">
      {/* Background Decor */}
      <div className="fixed inset-0 halftone-bg opacity-[0.02] pointer-events-none" />

      {/* Hero */}
      <div className="pt-40 pb-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
              Organization Identity
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[0.85] tracking-tighter">
              ANTCODE <br /> TECH.
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <Section className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
             >
                <p className="font-mono text-xs uppercase text-white/30 tracking-widest border-l border-white/20 pl-6">
                   Engineering Collective <br />
                   Est. 2014 / Node 01
                </p>
             </motion.div>
          </div>
          <div className="lg:col-span-8 space-y-12">
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl font-heading text-white leading-tight"
             >
                We are an engineering collective focused on shipping production-ready 
                architectures for the world's most data-intensive organizations.
             </motion.p>
             <div className="h-px w-full bg-white/10" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="space-y-6"
                >
                   <h4 className="font-mono text-xs uppercase text-primary tracking-widest">Philosophy</h4>
                   <p className="text-muted leading-relaxed">
                      We believe that code is a liability, not an asset. Our goal is to 
                      build the minimum required architecture to solve maximum business 
                      complexity. Every line of code we ship is tested, audited, and 
                      optimized for long-term maintenance.
                   </p>
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="space-y-6"
                >
                   <h4 className="font-mono text-xs uppercase text-primary tracking-widest">Execution</h4>
                   <p className="text-muted leading-relaxed">
                      Our process is purely factual. We rely on benchmarks, metrics, 
                      and architectural proofs rather than abstract promises. We 
                      interface directly with your internal engineering teams to 
                      ensure seamless integration.
                   </p>
                </motion.div>
             </div>
          </div>
        </div>
      </Section>

      {/* Metrics Ledger */}
      <Section className="bg-white/[0.01] border-y border-white/5">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { label: 'Latency Reduc.', value: '-42%', detail: 'Average across edge projects' },
              { label: 'Uptime SLA', value: '99.99%', detail: 'Enterprise-grade reliability' },
              { label: 'Sec. Audits', value: '0 Critical', detail: 'Since inception' },
              { label: 'Deploy Freq.', value: '14m', detail: 'Lead time to production' }
            ].map((metric) => (
              <div key={metric.label} className="space-y-4">
                 <p className="font-mono text-[10px] uppercase text-white/20 tracking-[0.2em]">{metric.label}</p>
                 <h3 className="text-5xl font-heading font-bold text-white">{metric.value}</h3>
                 <p className="text-xs text-muted font-mono">{metric.detail}</p>
              </div>
            ))}
         </div>
      </Section>
    </div>
  )
}
