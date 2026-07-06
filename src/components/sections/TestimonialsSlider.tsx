import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { Section } from '../layout/Section'
import { Quote } from 'lucide-react'

export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Section className="bg-white/[0.01] border-y border-white/5">
      <div className="mb-16 text-center">
        <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
          Client Stories
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
          What Our Clients Say
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Quote size={32} className="text-primary/30 mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-heading">
              "{testimonials[current].quote}"
            </p>
            <div>
              <p className="font-heading font-semibold text-white">{testimonials[current].author}</p>
              <p className="text-muted text-sm mt-1">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
