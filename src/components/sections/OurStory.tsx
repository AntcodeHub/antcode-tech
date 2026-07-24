import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'

export function OurStory() {
  return (
    <Section id="our-story" className="bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-12">
            From Students to <span className="text-white/40">Solution Builders</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-muted text-lg leading-relaxed">
              AntCode didn't start as a company. It started as two students who couldn't stop building things.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-muted text-lg leading-relaxed">
              For two years, we built - a university attendance system nobody asked us to build, hackathon projects that pushed us further than our coursework did, websites for people who just needed something that worked. Somewhere in that process, a question became impossible to ignore: why not use these same skills to actually help people solve real problems - and build something sustainable while doing it?
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-muted text-lg leading-relaxed">
              That question is AntCode. A team that understands both sides of the table - the technology, and the business problem it's actually meant to solve. We're not chasing "innovative" for its own sake. We're solving the manual process that's costing you money, the decision you're making blind, the growth you can't scale because your systems can't keep up.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-white font-semibold text-lg leading-relaxed">
              We're early. We're honest about that. But we'd rather start and learn in motion than wait for a perfect plan that never ships - and that same bias toward action is exactly what we bring to every client engagement.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}
