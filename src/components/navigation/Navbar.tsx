import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'

const primaryLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Community', href: '/community' },
  { name: 'Academy', href: '/academy' },
  { name: 'Technology', href: '/technology' },
]

const moreLinks = [
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Open Source', href: '/open-source' },
  { name: 'Projects', href: '/projects' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Events', href: '/events' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Pricing', href: '/pricing' },
]

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
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
    setMoreOpen(false)
  }, [location])

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <motion.nav
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={false}
          animate={{
            width: isHovered || isMobileMenuOpen ? '100%' : 'auto',
            maxWidth: isHovered || isMobileMenuOpen ? '1200px' : '64px',
            paddingLeft: isHovered || isMobileMenuOpen ? '24px' : '0px',
            paddingRight: isHovered || isMobileMenuOpen ? '24px' : '0px',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={cn(
            'pointer-events-auto h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center shadow-2xl transition-colors duration-500 relative',
            (isHovered || isScrolled) ? 'bg-black/60' : 'bg-white/5',
            !isHovered && !isMobileMenuOpen ? 'justify-start' : 'justify-between'
          )}
        >
          {/* Logo / Minimal Pill State */}
          {(!isHovered && !isMobileMenuOpen) ? (
            <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-mono">A</span>
              </div>
            </Link>
          ) : (
            <Link to="/" className="flex items-center shrink-0">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-lg font-mono">A</span>
              </div>
              <AnimatePresence>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="ml-3 font-heading font-bold text-white tracking-tight whitespace-nowrap"
                >
                  Antcode <span className="text-primary font-medium">Technology</span>
                </motion.span>
              </AnimatePresence>
            </Link>
          )}

          {/* Desktop Links (Visible on Hover) */}
          <div className="hidden lg:flex items-center space-x-8 px-8">
             <AnimatePresence>
               {isHovered && (
                 <>
                   {primaryLinks.map((link, i) => (
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
                   <div className="relative">
                     <motion.button
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.3 }}
                       onClick={() => setMoreOpen(!moreOpen)}
                       className="flex items-center gap-1 text-xs font-mono uppercase tracking-widest transition-colors hover:text-primary text-white/60"
                     >
                       More <ChevronDown size={14} className={cn('transition-transform', moreOpen && 'rotate-180')} />
                     </motion.button>
                     <AnimatePresence>
                       {moreOpen && (
                         <motion.div
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: 10 }}
                           className="absolute top-full right-0 mt-2 w-56 glass-card p-2 border-white/10 shadow-2xl z-[100]"
                         >
                           {moreLinks.map((link) => (
                             <Link
                               key={link.href}
                               to={link.href}
                               className={cn(
                                 'block px-4 py-2.5 text-xs font-mono uppercase tracking-widest rounded-lg transition-colors',
                                 location.pathname === link.href
                                   ? 'text-primary bg-primary/10'
                                   : 'text-white/60 hover:text-white hover:bg-white/5'
                               )}
                             >
                               {link.name}
                             </Link>
                           ))}
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>
                   <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.35 }}
                   >
                     <Button asChild variant="primary" size="sm" className="h-8 rounded-full text-[10px] uppercase tracking-widest px-6">
                       <Link to="/contact">Start Project</Link>
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
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8 p-12"
          >
            {[...primaryLinks, ...moreLinks].map((link) => (
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
            <Button asChild variant="primary" size="lg" className="w-full max-w-xs rounded-full">
              <Link to="/contact">Start Project</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
