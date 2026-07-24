import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, Send, Calendar, Trophy, ArrowRight } from 'lucide-react'
import { communityStats, topContributors } from '../../data/community'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'

export function CommunityPreview() {
  return (
    <Section id="community">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Join the Movement
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
            Antcode Technologies <span className="text-white/40">Community</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Connect with 500+ developers, join hackathons, attend events, 
            and contribute to open-source projects shaping Africa's tech future.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: MessageCircle, label: 'Discord', count: communityStats.discordMembers },
              { icon: Send, label: 'Telegram', count: communityStats.telegramMembers },
              { icon: Calendar, label: 'Events', count: communityStats.eventsHosted },
              { icon: Trophy, label: 'Contributors', count: communityStats.contributors },
            ].map((item) => (
              <div key={item.label} className="glass-card p-4 flex items-center gap-3">
                <item.icon size={18} className="text-primary" />
                <div>
                  <p className="text-white font-heading font-bold">{item.count}+</p>
                  <p className="text-[10px] font-mono uppercase text-muted">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="primary">
              <Link to="/community">Join Community</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/events">View Events</Link>
            </Button>
          </div>
        </div>

        <div className="glass-card p-8">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-6">
            Top Contributors
          </h3>
          <div className="space-y-4">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                <span className="font-mono text-xs text-primary w-6">#{contributor.rank}</span>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-mono text-primary">
                  {contributor.avatar}
                </div>
                <div className="flex-grow">
                  <p className="text-white text-sm font-medium">{contributor.name}</p>
                  <p className="text-[10px] font-mono text-muted">{contributor.contributions} contributions</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 mt-6 text-xs font-mono uppercase tracking-widest text-primary hover:text-white transition-colors"
          >
            View Leaderboard <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </Section>
  )
}
