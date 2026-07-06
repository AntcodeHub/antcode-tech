import { Section } from '../../components/layout/Section'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/Button'

const tiers = [
  {
    name: 'Starter',
    price: '$500+',
    description: 'Perfect for startups and small businesses looking for a professional presence.',
    features: [
      'Custom Landing Pages',
      'CMS Integration',
      'SEO Optimization',
      'Responsive Design',
      'Email Integration',
      'Basic Analytics',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$3,000+',
    description: 'Advanced solutions for growing businesses needing custom functionality.',
    features: [
      'Complex Web Apps',
      'Native Mobile Apps',
      'Custom API Development',
      'E-Commerce Solutions',
      'Priority Support',
      'Performance Tuning',
    ],
    buttonText: 'Start Building',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Mission-critical systems for large organizations with complex needs.',
    features: [
      'AI & Machine Learning',
      'Cloud Architecture',
      'ERP Systems',
      'Security Audits',
      'Dedicated Team',
      '24/7 SLA Support',
    ],
    buttonText: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="bg-white/[0.02] py-24 border-b border-white/5">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-8"
          >
            Invest in <br />
            <span className="text-primary">Exceptional Quality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted leading-relaxed"
          >
            We offer transparent, value-driven pricing structures tailored to the 
            complexity and scale of your digital goals.
          </motion.p>
        </div>
      </div>

      {/* Pricing Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-card p-10 flex flex-col h-full ${
                tier.popular ? 'border-primary/50 shadow-2xl shadow-primary/10' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                </div>
                <p className="text-muted text-sm mt-4 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3 text-sm">
                    <Check className="text-primary shrink-0" size={18} />
                    <span className="text-text/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.popular ? 'primary' : 'secondary'} 
                size="lg" 
                className="w-full group"
              >
                {tier.buttonText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Link / Help */}
      <Section className="bg-white/[0.01]">
        <div className="glass-card p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-white mb-6">Need a custom solution?</h3>
          <p className="text-muted text-lg mb-8">
            Large-scale projects often require specific resources and timelines. 
            Let's discuss your requirements in detail to provide a precise quote.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Strategy Session
          </Button>
        </div>
      </Section>
    </div>
  )
}
