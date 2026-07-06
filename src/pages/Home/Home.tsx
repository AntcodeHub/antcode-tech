import { Hero } from '../../components/hero/Hero'
import { TrustSection } from '../../components/hero/TrustSection'
import { ServicesGrid } from '../../components/services/ServicesGrid'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

import { FAQ } from '../../components/faq/FAQ'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustSection />
      
      {/* Company Intro Section */}
      <Section className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              We Don't Just Write Code. <br />
              <span className="text-primary">We Build Futures.</span>
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              At AntCode Technology, we believe that software should be an asset, not a burden. 
              Our team of engineers, designers, and strategists work in lockstep with your 
              vision to create digital products that are scalable, secure, and user-centric.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Enterprise-grade quality assurance',
                'Security-first development approach',
                'Cloud-native and scalable architecture',
                'Agile delivery and transparent communication'
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-text/90">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="lg">
              Learn Our Story
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-1">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                    {/* Abstract animated elements could go here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                        <div className="w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }} />
                    </div>
                    <div className="z-10 text-6xl font-heading font-bold text-white/20 select-none">
                        ANTCODE
                    </div>
                </div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 shadow-2xl">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-xs text-muted uppercase tracking-wider">System Uptime</div>
            </div>
          </motion.div>
        </div>
      </Section>

      <ServicesGrid />
      <FAQ />

      {/* CTA Section */}
      <Section className="relative bg-primary/5 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            Ready to Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Extraordinary?</span>
          </h2>
          <p className="text-muted text-xl mb-12">
            Whether you're a startup looking for your first product or an enterprise 
            scaling to millions of users, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="primary" size="lg" className="w-full sm:w-auto group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
