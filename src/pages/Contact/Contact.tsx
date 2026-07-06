import { Section } from '../../components/layout/Section'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export default function Contact() {
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
            Let's Start a <br />
            <span className="text-primary">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted leading-relaxed"
          >
            Have a project in mind or just want to learn more? Reach out to our 
            experts and discover how we can help you achieve your goals.
          </motion.p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <a href="mailto:info@antcode.tech" className="text-muted hover:text-white transition-colors">
                      info@antcode.tech
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <span className="text-muted">+1 (555) 000-0000</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Our Studio</p>
                    <span className="text-muted">123 Tech Avenue, Silicon Valley, CA 94025</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <span className="text-muted">Monday - Friday: 9am - 6pm EST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card aspect-video relative overflow-hidden group">
               <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                  <div className="text-muted/20 text-4xl font-heading font-bold uppercase tracking-tighter group-hover:scale-110 transition-transform duration-700">
                    World-Class Infrastructure
                  </div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
                  <div className="w-4 h-4 bg-primary rounded-full absolute inset-0" />
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first_name" className="text-sm font-medium text-text/70">First Name</label>
                  <input 
                    type="text" 
                    id="first_name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last_name" className="text-sm font-medium text-text/70">Last Name</label>
                  <input 
                    type="text" 
                    id="last_name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text/70">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-text/70">What service are you interested in?</label>
                <select 
                  id="service"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="" className="bg-dark-bg">Select a service</option>
                  <option value="software" className="bg-dark-bg">Custom Software</option>
                  <option value="web" className="bg-dark-bg">Web Development</option>
                  <option value="mobile" className="bg-dark-bg">Mobile Apps</option>
                  <option value="ai" className="bg-dark-bg">AI Solutions</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text/70">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  )
}
