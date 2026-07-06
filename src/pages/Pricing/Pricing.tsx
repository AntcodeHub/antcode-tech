import { Section } from '../../components/layout/Section'
import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import { cn } from '../../utils/cn'

const pricingSpecs = [
  { label: 'Edge Requests', starter: '100k', pro: '1M', enterprise: 'Unlimited' },
  { label: 'Serverless RAM', starter: '512MB', pro: '2GB', enterprise: 'Custom' },
  { label: 'Mesh Storage', starter: '10GB', pro: '250GB', enterprise: 'PB Scale' },
  { label: 'Node Instances', starter: '3', pro: '24', enterprise: 'Unlimited' },
  { label: 'SLA Uptime', starter: '99.9%', pro: '99.99%', enterprise: '99.999%' },
  { label: 'Custom SSL', starter: true, pro: true, enterprise: true },
  { label: 'Dedicated IP', starter: false, pro: true, enterprise: true },
  { label: 'RAG Pipeline', starter: false, pro: 'Basic', enterprise: 'Advanced' },
  { label: '24/7 Support', starter: false, pro: false, enterprise: true },
]

export default function Pricing() {
  return (
    <div className="flex flex-col relative">
      <div className="fixed inset-0 halftone-bg opacity-[0.02] pointer-events-none" />

      {/* Hero */}
      <div className="pt-40 pb-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[50%] h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
              Financial_Protocols
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[0.85] tracking-tighter uppercase">
              System <br />
              <span className="text-white/40">Resource</span> <br />
              Allocation.
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Technical Spec Pricing Sheet */}
      <Section className="relative z-10">
        <div className="border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10 divide-x divide-white/10">
            <div className="p-8 lg:p-12 flex flex-col justify-end bg-white/[0.02]">
               <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">Resource_Index</span>
            </div>
            {[
              { name: 'Starter', price: '$500', note: '/project' },
              { name: 'Professional', price: '$3,000', note: '/mo start' },
              { name: 'Enterprise', price: 'Custom', note: 'quote' }
            ].map((tier, i) => (
              <div key={tier.name} className={cn(
                 "p-8 lg:p-12 space-y-6",
                 i === 1 && "bg-primary/[0.03] relative"
              )}>
                 {i === 1 && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                 )}
                 <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wider">{tier.name}</h3>
                 <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-heading font-bold text-white">{tier.price}</span>
                    <span className="font-mono text-[10px] text-white/30 uppercase">{tier.note}</span>
                 </div>
                 <button className={cn(
                    "w-full h-12 font-mono text-[10px] uppercase tracking-widest border transition-all",
                    i === 1 ? "bg-primary text-white border-primary hover:bg-white hover:text-black" : "border-white/20 text-white/60 hover:border-white hover:text-white"
                 )}>
                    Initialize_Instance
                 </button>
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
             {pricingSpecs.map((spec, index) => (
               <motion.div 
                 key={spec.label}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05 }}
                 className="grid grid-cols-1 md:grid-cols-4 divide-x divide-white/10 group"
               >
                 <div className="p-6 lg:p-8 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors">
                    <span className="font-mono text-xs text-white/40 uppercase tracking-widest">{spec.label}</span>
                 </div>
                 {[spec.starter, spec.pro, spec.enterprise].map((val, i) => (
                    <div key={i} className={cn(
                       "p-6 lg:p-8 flex items-center justify-center transition-colors group-hover:bg-white/[0.01]",
                       i === 1 && "bg-primary/[0.01]"
                    )}>
                       {typeof val === 'boolean' ? (
                          val ? <Check className="text-primary" size={18} /> : <Minus className="text-white/10" size={18} />
                       ) : (
                          <span className="font-mono text-sm text-white font-medium">{val}</span>
                       )}
                    </div>
                 ))}
               </motion.div>
             ))}
          </div>
        </div>
      </Section>

      {/* Custom Config Callout */}
      <Section className="bg-white/[0.01]">
         <div className="glass-card p-12 lg:p-24 border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-2xl">
               <h3 className="text-4xl lg:text-6xl font-heading font-bold text-white uppercase tracking-tighter">
                  Need a bespoke <span className="text-primary italic">topology?</span>
               </h3>
               <p className="text-muted text-lg leading-relaxed">
                  Our engineers can design a custom resource allocation specifically 
                  for your throughput requirements and security compliance needs.
               </p>
            </div>
            <div className="w-full lg:w-auto">
               <button className="h-16 px-12 bg-white text-black font-heading font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                  Request Specification
               </button>
            </div>
         </div>
      </Section>
    </div>
  )
}
