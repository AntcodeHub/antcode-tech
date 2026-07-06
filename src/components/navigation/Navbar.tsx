import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{
          width: isHovered || isMobileMenuOpen ? '100%' : 'auto',
          maxWidth: isHovered || isMobileMenuOpen ? '1200px' : '60px',
          paddingLeft: isHovered || isMobileMenuOpen ? '24px' : '10px',
          paddingRight: isHovered || isMobileMenuOpen ? '24px' : '10px',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={cn(
          'pointer-events-auto h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-between overflow-hidden shadow-2xl transition-colors duration-500',
          (isHovered || isScrolled) ? 'bg-black/60' : 'bg-white/5'
        )}
      >
        {/* Logo / Minimal Pill State */}
        <Link to="/" className="flex items-center shrink-0">
           <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
             <span className="text-white font-bold text-lg font-mono">A</span>
           </div>
           <AnimatePresence>
             {(isHovered || isMobileMenuOpen) && (
               <motion.span
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -10 }}
                 className="ml-3 font-heading font-bold text-white tracking-tight whitespace-nowrap"
               >
                 AntCode <span className="text-primary font-medium">Technology</span>
               </motion.span>
             )}
           </AnimatePresence>
        </Link>

        {/* Desktop Links (Visible on Hover) */}
        <div className="hidden lg:flex items-center space-x-8 px-8">
           <AnimatePresence>
             {isHovered && (
               <>
                 {navLinks.map((link, i) => (
                   <motion.div
                     key={link.name}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.05 }}
                   >
                     <Link
                       to={link.href}
                       className={cn(
                         'text-xs font-mono uppercase tracking-widest transition-colors hover:text-primary',
                         location.pathname === link.href ? 'text-primary' : 'text-white/60'
                       )}
                     >
                       {link.name}
                     </Link>
                   </motion.div>
                 ))}
                 <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                 >
                   <Button variant="primary" size="sm" className="h-8 rounded-full text-[10px] uppercase tracking-widest px-6">
                     Execute_Run
                   </Button>
                 </motion.div>
               </>
             )}
           </AnimatePresence>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
           <AnimatePresence>
             {isHovered && (
               <motion.button
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-white ml-2"
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                 {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
               </motion.button>
             )}
           </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-0 bg-black/95 backdrop-blur-2xl z-[-1] flex flex-col items-center justify-center space-y-8 p-12"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-3xl font-heading font-bold transition-colors',
                  location.pathname === link.href ? 'text-primary' : 'text-white/40'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" size="lg" className="w-full max-w-xs rounded-full">
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
