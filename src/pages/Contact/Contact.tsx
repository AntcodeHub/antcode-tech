import { Section } from '../../components/layout/Section'
import { PageHero } from '../../components/layout/PageHero'
import { TerminalForm } from '../../components/contact/TerminalForm'
import { Button } from '../../components/ui/Button'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Contact"
        title={<>Let's Build <span className="text-white/40">Together</span></>}
        description="Start a project, join the community, or just say hello. We'd love to hear from you."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-8">Send a Message</h2>
            <TerminalForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@antcode.tech', href: 'mailto:hello@antcode.tech' },
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+237 6XX XXX XXX', href: 'https://wa.me/237600000000' },
                  { icon: MapPin, label: 'Office', value: 'Douala, Cameroon', href: '#' },
                  { icon: MessageCircle, label: 'Community', value: 'Discord & Telegram', href: '/community' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-4 glass-card p-5 hover:border-primary/30 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-muted">{item.label}</p>
                      <p className="text-white group-hover:text-primary transition-colors mt-1">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-heading font-bold text-white mb-4">Book a Meeting</h3>
              <p className="text-muted text-sm mb-6">Schedule a free 30-minute consultation to discuss your project.</p>
              <Button variant="primary" className="w-full font-mono uppercase tracking-widest text-xs">
                Schedule Call
              </Button>
            </div>

            <div className="glass-card aspect-video flex items-center justify-center bg-surface/50">
              <div className="text-center">
                <MapPin size={32} className="text-primary/40 mx-auto mb-3" />
                <p className="text-muted text-sm font-mono">Douala, Cameroon</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
