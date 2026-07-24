import { Section } from '../layout/Section'
import { ScrollReveal } from '../ui/ScrollReveal'

const teamMembers = [
  {
    name: 'Soh Talla Erick',
    role: 'Business Development & Strategy',
    description: 'Computer engineering background with a focus on business development, communication, and foundational data science. Translates business problems into technical solutions - the bridge between what a client needs and what the team builds.',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQE3sahX_9ce3A/profile-displayphoto-scale_400_400/B4EZjyYJqFGcAg-/0/1756413077823?e=1786579200&v=beta&t=EFSG4wnKvrI2lCrHfJ1BzDhIabtw4thdSo4dZ68AL8s'
  },
  {
    name: 'Ibrahim Fonyuy',
    role: 'Software, AI & Cloud Engineering',
    description: 'Software engineer with hands-on expertise in AI engineering, cloud infrastructure, and DevOps. Leads the technical build - from architecture to deployment to the systems that keep client software running long after launch.',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQGo97pzUX9LbA/profile-displayphoto-scale_400_400/B4EZ2xyO9VJ0Ag-/0/1776804238571?e=1786579200&v=beta&t=fBXyFRRx5J4XA04PxAVN7qRb2iKMDCX6L7vHry5vlug'
  },
  {
    name: 'Leticia',
    role: 'AI, Data Science & Machine Learning',
    description: 'Computer engineer specializing in AI, data science, and machine learning. Brings the analytical depth that turns raw data into decisions clients can actually act on.',
    image: null // TODO: Add picture
  }
]

export function OurTeam() {
  return (
    <Section id="our-team" className="bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
            Founding Team, Built for <span className="text-white/40">Full-Stack Delivery</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-12 max-w-3xl">
            Technical depth and business judgment, under one roof.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-white font-semibold text-lg leading-relaxed mb-12">
            Together, we're a small team by design - small enough to move fast and stay accountable, technical enough to deliver end-to-end without outsourcing the parts that matter.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} direction="up" delay={0.3 + index * 0.1}>
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
                {/* Team member image */}
                <div className="w-full aspect-square bg-gradient-to-br from-white/5 to-white/0 rounded-xl mb-6 overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/20 font-mono text-sm uppercase tracking-wider">
                        {member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0] || ''}
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-mono uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
