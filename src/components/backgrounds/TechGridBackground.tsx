import { motion } from 'framer-motion'

export function TechGridBackground() {
  const gridSize = 20
  const cells = []

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      cells.push({ x: i, y: j })
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated glowing dots */}
      {cells.map((cell) => {
        const delay = (cell.x + cell.y) * 0.05
        return (
          <motion.div
            key={`${cell.x}-${cell.y}`}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${(cell.x / gridSize) * 100}%`,
              top: `${(cell.y / gridSize) * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          />
        )
      })}

      {/* Scanning line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-secondary/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/30" />

      {/* Floating circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 0 200 Q 200 150 400 200 T 800 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
          animate={{
            strokeDasharray: [0, 1000],
            strokeDashoffset: [1000, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.path
          d="M 100 0 Q 150 300 100 600 T 100 1000"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-secondary"
          animate={{
            strokeDasharray: [0, 1000],
            strokeDashoffset: [1000, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
            delay: 2,
          }}
        />
      </svg>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/50 via-transparent to-dark-bg/50" />
    </div>
  )
}
