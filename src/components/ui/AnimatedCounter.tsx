import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, suffix = '', duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const increment = end / (duration * 60)
    let frame: number

    const animate = () => {
      start += increment
      if (start < end) {
        setCount(Math.floor(start))
        frame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
