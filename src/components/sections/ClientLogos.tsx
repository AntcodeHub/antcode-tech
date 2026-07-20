import { motion } from 'framer-motion'
import { clients } from '../../data/clients'
import { ScrollReveal } from '../ui/ScrollReveal'

export function ClientLogos() {
  return (
    <div className="py-16 border-y border-white/5">
      <div className="container-custom">
        <ScrollReveal>
          <p className="text-center text-muted text-sm font-mono uppercase tracking-widest mb-8">
            Trusted by innovative companies worldwide
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary/30 transition-colors group">
                <span className="text-2xl font-bold text-white/40 group-hover:text-primary transition-colors font-mono">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
