import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface InfiniteMarqueeProps {
  items: React.ReactNode[]
  speed?: number
  direction?: 'left' | 'right'
}

export function InfiniteMarquee({ items, speed = 50, direction = 'left' }: InfiniteMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    

    const totalWidth = marquee.scrollWidth
    const duration = totalWidth / speed

    gsap.set(marquee, { x: direction === 'left' ? 0 : -totalWidth / 2 })

    const animation = gsap.to(marquee, {
      x: direction === 'left' ? -totalWidth / 2 : 0,
      duration: duration,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      animation.kill()
    }
  }, [speed, direction])

  return (
    <div className="overflow-hidden whitespace-nowrap py-10">
      <div ref={marqueeRef} className="inline-block">
        <div className="flex items-center space-x-20 px-10">
          {items.map((item, i) => (
            <div key={i} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
