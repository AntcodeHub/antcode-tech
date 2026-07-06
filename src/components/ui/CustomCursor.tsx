import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isVisible, mouseX, mouseY])

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
      className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
    >
       <div className="w-1 h-1 bg-primary rounded-full" />
    </motion.div>
  )
}
