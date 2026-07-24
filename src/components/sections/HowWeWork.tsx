import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Check } from 'lucide-react'

const principles = [
  {
    title: 'Certainty',
    description: 'Fixed scope, fixed price, no surprises mid-project.'
  },
  {
    title: 'Care',
    description: 'We don\'t disappear after launch - every build comes with a path to ongoing support.'
  },
  {
    title: 'Context',
    description: 'We understand the market we\'re building in, not a playbook borrowed from somewhere else.'
  }
]

export function HowWeWork() {
  return (
    <Section id="how-we-work" className="bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-12">
            Built Different, <span className="text-white/40">By Design</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.title} direction="up" delay={0.2 + index * 0.1}>
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Check size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center">
            <p className="text-white text-xl font-semibold mb-6">
              Want to know how we can help your organization modernize, automate, and grow?
            </p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-white transition-colors group"
            >
              See what we do 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
