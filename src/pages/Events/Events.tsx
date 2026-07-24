import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { events, announcements } from '../../data/events'
import { Calendar, MapPin, Megaphone } from 'lucide-react'

export default function Events() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Events"
        title={<>Hackathons, Workshops & <span className="text-white/40">Meetups</span></>}
        description="Join us at upcoming events - online and across Africa."
      />

      <Section>
        <h2 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Calendar size={22} className="text-primary" /> Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8 hover:border-primary/30 transition-all"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary">{event.type}</span>
              <h3 className="text-xl font-heading font-bold text-white mt-2 mb-3">{event.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{event.description}</p>
              <div className="flex items-center gap-6 text-[10px] font-mono text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {event.date}</span>
                <span className="flex items-center gap-1.5"><MapPin size={12} /> {event.location}</span>
              </div>
              <Button variant="primary" size="sm" className="mt-6 font-mono uppercase tracking-widest text-xs">
                Register
              </Button>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
          <Megaphone size={22} className="text-primary" /> Announcements
        </h2>
        <div className="space-y-4">
          {announcements.map((item) => (
            <div key={item.id} className="glass-card p-6 flex items-start gap-6">
              <span className="text-[10px] font-mono text-primary uppercase shrink-0 mt-1">{item.type}</span>
              <div>
                <h3 className="font-heading font-semibold text-white">{item.title}</h3>
                <p className="text-muted text-sm mt-1">{item.excerpt}</p>
                <p className="text-[10px] font-mono text-white/30 mt-2">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
