import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { careers, benefits } from '../../data/openSource'
import { MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Careers() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Careers"
        title={<>Build the Future <span className="text-white/40">With Us</span></>}
        description="Join a remote-first team of engineers, designers, and innovators shaping Africa's technology landscape."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-4 block">Life at Antcode Technology</span>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Why Work Here</h2>
            <p className="text-muted leading-relaxed mb-8">
              At Antcode Technology, you'll work on meaningful projects that impact millions across Africa. 
              We invest in our people with mentorship, learning budgets, and a culture of innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="font-heading font-bold text-white mb-6">Hiring Process</h3>
            <div className="space-y-6">
              {['Apply Online', 'Technical Assessment', 'Team Interview', 'Culture Fit', 'Offer'].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-mono text-primary">{i + 1}</span>
                  <span className="text-white/80">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-white">Open Positions</h2>
        </div>
        <div className="space-y-4">
          {careers.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-all group"
            >
              <div>
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-[10px] font-mono uppercase text-muted">
                  <span>{job.department}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="font-mono uppercase tracking-widest text-xs shrink-0">
                <Link to="/contact">Apply <ArrowRight size={14} className="ml-1" /></Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
