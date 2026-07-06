import { Section } from '../../components/layout/Section'
import { services } from '../../data/services'
import { ServiceCard } from '../../components/services/ServiceCard'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export default function Services() {
  return (
    <div className="flex flex-col relative">
      <div className="fixed inset-0 halftone-bg opacity-[0.02] pointer-events-none" />

      {/* Hero */}
      <div className="pt-40 pb-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
              Service Infrastructure
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white leading-tight">
              TURNING <br />
              <span className="text-white/40">COMPLEXITY</span> <br />
              INTO ELEGANCE.
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-white/[0.01]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Our Development Process</h2>
          <p className="text-muted text-lg">
            A disciplined, agile approach to software delivery that ensures quality 
            and transparency at every stage.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business goals, user needs, and technical requirements.' },
              { step: '02', title: 'Design & Arch', desc: 'Crafting intuitive interfaces and robust system architectures.' },
              { step: '03', title: 'Development', desc: 'Iterative, sprint-based coding with continuous feedback loops.' },
              { step: '04', title: 'Launch & Support', desc: 'Seamless deployment followed by long-term maintenance and scaling.' }
            ].map((phase) => (
              <div key={phase.step} className="glass-card p-8 group hover:border-primary/30 transition-all">
                <div className="text-primary font-mono text-sm mb-4">{phase.step}</div>
                <h4 className="text-xl font-heading font-bold text-white mb-4">{phase.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Us / Quality */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative aspect-video glass-card overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                 <div className="text-white/20 font-bold text-8xl rotate-12 select-none group-hover:rotate-0 transition-transform duration-700">CODE</div>
              </div>
           </div>
           <div className="space-y-8">
              <h2 className="text-4xl font-heading font-bold text-white leading-tight">
                Enterprise-Grade Quality <br />
                <span className="text-primary">Is Our Standard</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                We don't cut corners. Every project undergoes rigorous testing, 
                security auditing, and performance optimization before it ever 
                reaches your users.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   'Automated Testing',
                   'Code Reviews',
                   'Security Audits',
                   'Performance Tuning',
                   'CI/CD Pipelines',
                   'Zero-Downtime Deploys'
                 ].map((item) => (
                   <div key={item} className="flex items-center space-x-2">
                     <CheckCircle2 size={18} className="text-primary" />
                     <span className="text-text/90 text-sm">{item}</span>
                   </div>
                 ))}
              </div>
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
           </div>
        </div>
      </Section>
    </div>
  )
}
