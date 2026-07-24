import { motion } from 'framer-motion'
import { whyChooseUs } from '../../data/whyUs'
import { Section } from '../layout/Section'
import { CheckCircle2 } from 'lucide-react'

export function WhyChooseUs() {
  return (
    <Section className="bg-white/[0.01]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Why Antcode Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight sticky top-32">
            Why Choose <span className="text-white/40">Us</span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-0">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="spec-row group"
            >
              <div className="flex items-start gap-6 w-full">
                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                <div>
                  <h4 className="font-heading font-semibold text-white text-lg mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
