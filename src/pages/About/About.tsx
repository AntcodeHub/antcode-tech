import { Section } from '../../components/layout/Section'
import { motion } from 'framer-motion'
import { Shield, Zap, Heart, Target, Eye } from 'lucide-react'

const values = [
  {
    title: 'Excellence',
    description: 'We strive for perfection in every line of code and every design pixel.',
    icon: Zap,
  },
  {
    title: 'Integrity',
    description: 'Transparent communication and honest partnerships are our foundation.',
    icon: Shield,
  },
  {
    title: 'Innovation',
    description: 'We constantly explore emerging technologies to keep our clients ahead.',
    icon: Target,
  },
  {
    title: 'Empathy',
    description: 'We listen deeply to understand your business and user needs.',
    icon: Heart,
  },
]

export default function About() {
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
            Engineering the <br />
            <span className="text-primary">Digital Frontier</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted leading-relaxed"
          >
            AntCode Technology is a collective of visionary engineers and designers 
            dedicated to building software that empowers organizations to thrive in 
            the digital age.
          </motion.p>
        </div>
      </div>

      {/* Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-white">Our Story</h2>
            <p className="text-muted text-lg leading-relaxed">
              Founded on the principle that technology should be an enabler, AntCode 
              Technology began as a small group of passionate developers solving 
              complex problems for local startups. 
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Today, we've grown into a global agency serving clients across five 
              continents. Our journey has been defined by a relentless pursuit of 
              technical excellence and a deep commitment to our clients' success. 
              We don't just build products; we build long-term relationships based 
              on trust and results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-8 text-center aspect-square flex flex-col justify-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted uppercase tracking-widest">Years of Innovation</div>
            </div>
            <div className="glass-card p-8 text-center aspect-square flex flex-col justify-center mt-12">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted uppercase tracking-widest">Expert Engineers</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-white/[0.01]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-10 space-y-6 border-primary/20 bg-primary/5">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Target size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white">Our Mission</h3>
            <p className="text-muted text-lg leading-relaxed">
              To empower businesses through intelligent software solutions that 
              bridge the gap between visionary ideas and impactful digital realities.
            </p>
          </div>
          <div className="glass-card p-10 space-y-6 border-accent/20 bg-accent/5">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <Eye size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white">Our Vision</h3>
            <p className="text-muted text-lg leading-relaxed">
              To be the world's most trusted partner for digital transformation, 
              known for setting the standard in engineering quality and innovation.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Our Core Values</h2>
          <p className="text-muted text-lg">
            These principles guide everything we do, from our internal culture 
            to how we interact with our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-4">{value.title}</h4>
              <p className="text-muted text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
