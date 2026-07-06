import { services } from '../../data/services'
import { ServiceCard } from './ServiceCard'
import { Section } from '../layout/Section'

export function ServicesGrid() {
  return (
    <Section id="services" container={false} className="py-0 lg:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Sticky Left Column */}
        <div className="lg:col-span-4 bg-dark-bg lg:sticky lg:top-0 h-fit lg:h-screen flex flex-col justify-center p-12 lg:p-24 border-r border-white/5">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6">
            Core Architectures
          </span>
          <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
            Our <br /> Expertise.
          </h2>
          <p className="text-muted text-lg max-w-xs mb-12">
            Factual engineering for the next generation of data-intensive systems.
          </p>
          
          {/* Minimap Progress (Static indicator for now) */}
          <div className="flex flex-col space-y-4">
             {['Cloud Infrastructure', 'Neural Computing', 'Edge Delivery'].map((item) => (
               <div key={item} className="flex items-center space-x-4 opacity-30 hover:opacity-100 transition-opacity cursor-default">
                  <div className="w-8 h-px bg-white" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white">{item}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="lg:col-span-8">
          {services.slice(0, 4).map((service) => (
            <div key={service.id} className="min-h-screen flex items-center p-6 lg:p-24 border-b border-white/5">
               <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
