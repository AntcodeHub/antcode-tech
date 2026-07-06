import { SiReact, SiNextdotjs, SiPython, SiNodedotjs, SiDocker, SiVercel, SiGooglecloud, SiTypescript, SiPostgresql, SiMongodb, SiFlutter, SiDjango, SiFastapi, SiVite } from '@icons-pack/react-simple-icons'
import { InfiniteMarquee } from '../ui/InfiniteMarquee'

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Docker', icon: SiDocker },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Google Cloud', icon: SiGooglecloud },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Django', icon: SiDjango },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Vite', icon: SiVite },
]

export function TrustSection() {
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-muted text-sm font-medium mb-10 tracking-widest uppercase">
          Trusted by innovators and built with world-class technologies
        </p>
      </div>
        
      <InfiniteMarquee 
        speed={40}
        items={technologies.map((tech) => (
          <div key={tech.name} className="flex items-center space-x-3 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300">
            <tech.icon size={28} className="text-white group-hover:text-primary transition-colors" />
            <span className="text-sm text-white font-heading font-medium tracking-tight">
              {tech.name}
            </span>
          </div>
        ))}
      />

      <div className="container-custom">
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
                <div className="text-3xl font-heading font-bold text-white mb-1">150+</div>
                <div className="text-muted text-xs uppercase tracking-widest">Projects Delivered</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-heading font-bold text-white mb-1">10+</div>
                <div className="text-muted text-xs uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-heading font-bold text-white mb-1">98%</div>
                <div className="text-muted text-xs uppercase tracking-widest">Client Retention</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-heading font-bold text-white mb-1">24/7</div>
                <div className="text-muted text-xs uppercase tracking-widest">Expert Support</div>
            </div>
        </div>
      </div>
    </div>
  )
}
