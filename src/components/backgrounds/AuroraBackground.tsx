import { useEffect, useRef } from 'react'

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.3 + Math.cos(time * 0.7) * 80,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        canvas.width * 0.5
      )
      gradient1.addColorStop(0, 'rgba(37, 99, 235, 0.15)')
      gradient1.addColorStop(1, 'transparent')

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.8) * 120,
        canvas.height * 0.6 + Math.sin(time * 0.6) * 60,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.4
      )
      gradient2.addColorStop(0, 'rgba(124, 58, 237, 0.12)')
      gradient2.addColorStop(1, 'transparent')

      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 1.2) * 80,
        canvas.height * 0.8,
        0,
        canvas.width * 0.5,
        canvas.height * 0.8,
        canvas.width * 0.3
      )
      gradient3.addColorStop(0, 'rgba(6, 182, 212, 0.08)')
      gradient3.addColorStop(1, 'transparent')

      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
