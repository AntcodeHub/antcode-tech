import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

interface ServiceCardProps {
  title: string
  description: string
  icon: any
  technologies: string[]
  color: string
}

export function ServiceCard({ title, description, icon: Icon, technologies, color }: ServiceCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-card/30 p-8 transition-colors hover:bg-card/50"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br", color)}>
        <Icon size={24} className="text-white" />
      </div>

      <h3 className="text-xl font-heading font-bold text-white mb-4">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-text/80 uppercase">
            {tech}
          </span>
        ))}
      </div>

      <button className="group flex items-center text-sm font-medium text-primary hover:text-white transition-colors">
        Learn More
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}
