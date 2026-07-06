import { cn } from "../../utils/cn"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  container?: boolean
}

export function Section({ children, className, id, container = true }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-32 overflow-hidden", className)}>
      {container ? (
        <div className="container-custom">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
