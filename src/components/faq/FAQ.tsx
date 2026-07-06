import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Section } from '../layout/Section'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Timeline varies by complexity. A simple website might take 4-6 weeks, while a complex enterprise platform can take 4-6 months.',
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We offer both fixed-price for well-defined projects and time-and-materials for more fluid, agile engagements.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes, we provide several maintenance tiers to ensure your software stays secure, updated, and performant after launch.',
  },
  {
    question: 'Can we hire your team for remote work?',
    answer: 'Absolutely. We are a global-first agency and have streamlined processes for remote collaboration across all time zones.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="faq">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">Frequently Asked Questions</h2>
        <p className="text-muted text-lg">
          Common questions about our process, pricing, and how we work with clients.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden bg-white/[0.02] border-white/5"
          >
            <button
              className="w-full px-8 py-8 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-heading font-medium text-white group-hover:text-primary transition-colors">{faq.question}</span>
              {openIndex === index ? (
                <Minus size={20} className="text-primary" />
              ) : (
                <Plus size={20} className="text-primary" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-6 text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
