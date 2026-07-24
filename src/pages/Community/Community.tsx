import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { events, announcements } from '../../data/events'
import { communityStats, topContributors, discussions } from '../../data/community'
import { MessageCircle, Send, Calendar, Trophy, Megaphone, Users } from 'lucide-react'

export default function Community() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Antcode Technologies Community"
        title={<>Where Africa's <span className="text-white/40">Builders</span> Connect</>}
        description="Join 500+ developers, attend events, compete in hackathons, and contribute to open-source projects."
      />

      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Users, label: 'Total Members', value: '500+' },
            { icon: MessageCircle, label: 'Discord', value: `${communityStats.discordMembers}+` },
            { icon: Send, label: 'Telegram', value: `${communityStats.telegramMembers}+` },
            { icon: Trophy, label: 'Contributors', value: `${communityStats.contributors}+` },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <stat.icon size={24} className="text-primary mx-auto mb-3" />
              <p className="text-3xl font-heading font-bold text-white">{stat.value}</p>
              <p className="text-[10px] font-mono uppercase text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <Calendar size={20} className="text-primary" /> Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-6 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-primary">{event.type}</span>
                        <h3 className="text-lg font-heading font-bold text-white mt-1">{event.title}</h3>
                        <p className="text-muted text-sm mt-2">{event.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono text-xs text-white">{event.date}</p>
                        <p className="text-[10px] font-mono text-muted mt-1">{event.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <Megaphone size={20} className="text-primary" /> Announcements
              </h2>
              <div className="space-y-3">
                {announcements.map((item) => (
                  <div key={item.id} className="glass-card p-5 flex items-start gap-4">
                    <span className="text-[10px] font-mono text-primary uppercase shrink-0 mt-1">{item.type}</span>
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-muted text-sm mt-1">{item.excerpt}</p>
                      <p className="text-[10px] font-mono text-white/30 mt-2">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="font-heading font-bold text-white mb-4">Join Us</h3>
              <div className="space-y-3">
                <Button asChild variant="primary" className="w-full font-mono uppercase tracking-widest text-xs">
                  <a href="#">Join Discord</a>
                </Button>
                <Button asChild variant="secondary" className="w-full font-mono uppercase tracking-widest text-xs">
                  <a href="#">Join Telegram</a>
                </Button>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-heading font-bold text-white mb-4">Leaderboard</h3>
              <div className="space-y-3">
                {topContributors.map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary w-5">#{c.rank}</span>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-mono text-primary">{c.avatar}</div>
                    <div className="flex-grow">
                      <p className="text-sm text-white">{c.name}</p>
                      <p className="text-[10px] text-muted">{c.contributions} pts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-heading font-bold text-white mb-4">Latest Discussions</h3>
              <div className="space-y-3">
                {discussions.map((d) => (
                  <div key={d.title} className="border-b border-white/5 pb-3 last:border-0">
                    <p className="text-sm text-white/80">{d.title}</p>
                    <p className="text-[10px] font-mono text-muted mt-1">{d.replies} replies · {d.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
