import { motion } from 'framer-motion'
import { testimonials } from '../../data/clients'
import { Star, Quote } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Testimonials() {
  return (
    <div className="py-24 bg-white/[0.01]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
              What Our <span className="text-white/40">Clients Say</span>
            </h2>
            <p className="text-muted text-lg">
              Don't just take our word for it. Here's what industry leaders say about working with us.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                
                <Quote size={24} className="text-primary/20 mb-4" />
                
                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold font-mono">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                    <p className="text-muted text-xs">{testimonial.role}</p>
                    <p className="text-primary text-xs font-mono">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
