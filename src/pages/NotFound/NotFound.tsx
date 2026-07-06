import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-[180px] md:text-[240px] font-heading font-bold text-white/5 leading-none select-none">
              404
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="text-6xl md:text-8xl font-heading font-bold text-white">404</span>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Page Not Found
            </h2>
            <p className="text-muted max-w-md mx-auto text-lg">
              The page you're looking for doesn't exist or has been moved to a new location.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button asChild variant="primary" size="lg" className="font-mono uppercase tracking-widest">
              <Link to="/">
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="font-mono uppercase tracking-widest">
              <Link to="/contact">
                Contact Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
