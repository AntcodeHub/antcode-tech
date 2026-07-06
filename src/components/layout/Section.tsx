import { cn } from "../../utils/cn"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  container?: boolean
}

export function Section({ children, className, id, container = true }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 lg:py-40 relative overflow-hidden", className)}>
      {container ? (
        <div className="container-custom relative z-10">
          {children}
        </div>
      ) : (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </section>
  )
}
