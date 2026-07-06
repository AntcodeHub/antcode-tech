import { Section } from '../../components/layout/Section'

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="pt-40 pb-24 halftone-bg border-b border-white/5">
        <div className="container-custom">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Organization Identity
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[0.85] tracking-tighter">
            ANTCODE <br /> TECH.
          </h1>
        </div>
      </div>

      {/* Narrative Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <p className="font-mono text-xs uppercase text-white/30 tracking-widest border-l border-white/20 pl-6">
                   Engineering Collective <br />
                   Est. 2014 / Node 01
                </p>
             </div>
          </div>
          <div className="lg:col-span-8 space-y-12">
             <p className="text-2xl lg:text-4xl font-heading text-white leading-tight">
                We are an engineering collective focused on shipping production-ready 
                architectures for the world's most data-intensive organizations.
             </p>
             <div className="h-px w-full bg-white/10" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                   <h4 className="font-mono text-xs uppercase text-primary tracking-widest">Philosophy</h4>
                   <p className="text-muted leading-relaxed">
                      We believe that code is a liability, not an asset. Our goal is to 
                      build the minimum required architecture to solve maximum business 
                      complexity. Every line of code we ship is tested, audited, and 
                      optimized for long-term maintenance.
                   </p>
                </div>
                <div className="space-y-6">
                   <h4 className="font-mono text-xs uppercase text-primary tracking-widest">Execution</h4>
                   <p className="text-muted leading-relaxed">
                      Our process is purely factual. We rely on benchmarks, metrics, 
                      and architectural proofs rather than abstract promises. We 
                      interface directly with your internal engineering teams to 
                      ensure seamless integration.
                   </p>
                </div>
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
