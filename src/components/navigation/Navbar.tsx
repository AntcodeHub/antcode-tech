import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'
import { SearchModal } from '../ui/SearchModal'

const navCategories = [
  {
    name: 'Home',
    href: '/',
    hasDropdown: false
  },
  {
    name: 'What We Do',
    hasDropdown: true,
    sections: [
      {
        title: 'Services',
        links: [
          { name: 'All Services', href: '/services' },
          { name: 'Web Development', href: '/services' },
          { name: 'Mobile Development', href: '/services' },
          { name: 'UI/UX Design', href: '/services' },
          { name: 'Cloud Solutions', href: '/services' },
        ]
      },
      {
        title: 'Solutions',
        links: [
          { name: 'All Solutions', href: '/solutions' },
          { name: 'Enterprise Solutions', href: '/solutions' },
          { name: 'Custom Software', href: '/solutions' },
          { name: 'API Development', href: '/solutions' },
        ]
      },
      {
        title: 'Industries',
        links: [
          { name: 'All Industries', href: '/industries' },
          { name: 'FinTech', href: '/industries' },
          { name: 'Healthcare', href: '/industries' },
          { name: 'Education', href: '/industries' },
        ]
      }
    ]
  },
  {
    name: 'Portfolio',
    hasDropdown: true,
    sections: [
      {
        title: 'Case Studies',
        links: [
          { name: 'All Case Studies', href: '/case-studies' },
          { name: 'Featured Projects', href: '/case-studies' },
          { name: 'Success Stories', href: '/case-studies' },
          { name: 'Client Results', href: '/case-studies' },
        ]
      },
      {
        title: 'Projects',
        links: [
          { name: 'All Projects', href: '/projects' },
          { name: 'Open Source', href: '/open-source' },
          { name: 'Community Projects', href: '/community' },
          { name: 'Resources', href: '/resources' },
        ]
      },
      {
        title: 'Technology',
        links: [
          { name: 'Our Tech Stack', href: '/technology' },
          { name: 'Frameworks', href: '/technology' },
          { name: 'Tools & Platforms', href: '/technology' },
          { name: 'Best Practices', href: '/technology' },
        ]
      }
    ]
  },
  {
    name: 'Our Story',
    hasDropdown: true,
    sections: [
      {
        title: 'About Us',
        links: [
          { name: 'Company Overview', href: '/about' },
          { name: 'Our Mission', href: '/about' },
          { name: 'Our Vision', href: '/about' },
          { name: 'Core Values', href: '/about' },
        ]
      },
      {
        title: 'Team & Culture',
        links: [
          { name: 'Careers', href: '/careers' },
          { name: 'Join Our Team', href: '/careers' },
          { name: 'Academy', href: '/academy' },
          { name: 'Events', href: '/events' },
        ]
      },
      {
        title: 'Community',
        links: [
          { name: 'Blog', href: '/blog' },
          { name: 'Open Source', href: '/open-source' },
          { name: 'Events', href: '/events' },
          { name: 'Pricing', href: '/pricing' },
        ]
      }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    hasDropdown: false,
    isButton: true
  },
]

export function Navbar() {
  const [isHovered, setIsHovered] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <motion.nav
          onMouseEnter={() => setIsHovered(true)}
          
          initial={false}
          animate={{
            width: isHovered || isMobileMenuOpen ? '100%' : 'auto',
            maxWidth: isHovered || isMobileMenuOpen ? '1200px' : '64px',
            paddingLeft: isHovered || isMobileMenuOpen ? '24px' : '0px',
            paddingRight: isHovered || isMobileMenuOpen ? '24px' : '0px',
            minWidth: !isHovered || !isMobileMenuOpen ? '250px': '0px',
            
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={cn(
            'pointer-events-auto h-18  bg-white/10 backdrop-blur-xl border border-white/20 rounded-4xl flex items-center text-center shadow-2xl transition-colors duration-500 relative ',
            (isHovered || isScrolled) ? 'bg-black/60' : 'bg-white/5',
            !isHovered && !isMobileMenuOpen ? 'justify-center' : 'justify-between'
          )}
        >
          {/* Logo / Minimal Pill State */}
          {(!isHovered && !isMobileMenuOpen) ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                 Antcode <span className="text-primary font-medium">Technologies</span>
              </span>
            </div>
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
                  Antcode <span className="text-primary font-medium">Technologies</span>
                </motion.span>
              </AnimatePresence>
            </Link>
          )}

          {/* Desktop Links (Visible on Hover) */}
          <div className="hidden lg:flex items-center space-x-8 px-8">
             <AnimatePresence>
               {isHovered && (
                 <>
                   {navCategories.map((category, i) => (
                     <motion.div
                       key={category.name}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
                       className="relative flex items-center"
                       onMouseEnter={() => category.hasDropdown && setActiveDropdown(category.name)}
                       onMouseLeave={() => setActiveDropdown(null)}
                     >
                       {category.hasDropdown ? (
                         <>
                           <button
                             className={cn(
                               'flex items-center gap-1 text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:text-primary relative group',
                               activeDropdown === category.name ? 'text-primary' : 'text-white/60'
                             )}
                           >
                             <span className="relative">
                               {category.name}
                               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                             </span>
                             <ChevronDown size={14} className={cn('transition-transform duration-300', activeDropdown === category.name && 'rotate-180')} />
                           </button>
                           <AnimatePresence>
                             {activeDropdown === category.name && (
                               <motion.div
                                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                 animate={{ opacity: 1, y: 0, scale: 1 }}
                                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                 transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                 className="fixed left-1/2 -translate-x-1/2 top-24 mt-4 w-[80vw] max-w-6xl glass-card p-8 border border-white/10 shadow-2xl z-50 bg-black backdrop-blur-xl rounded-2xl"
                                 style={{ maxHeight: '70vh' }}
                               >
                                 <div className="grid grid-cols-3 gap-8">
                                   {category.sections?.map((section, sectionIndex) => (
                                     <motion.div
                                       key={section.title}
                                       initial={{ opacity: 0, x: 20 }}
                                       animate={{ opacity: 1, x: 0 }}
                                       transition={{ delay: sectionIndex * 0.1 }}
                                     >
                                       <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider border-b border-white/10 pb-2">{section.title}</h3>
                                       <div className="space-y-1">
                                         {section.links.map((link, linkIndex) => (
                                           <motion.div
                                             key={link.href}
                                             initial={{ opacity: 0, x: 10 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                                           >
                                             <Link
                                               to={link.href}
                                               className="block px-4 py-3 text-xs font-mono uppercase tracking-widest rounded-lg transition-all duration-300 hover:scale-105 text-white/70 hover:text-white hover:bg-white/10"
                                             >
                                               {link.name}
                                             </Link>
                                           </motion.div>
                                         ))}
                                       </div>
                                     </motion.div>
                                   ))}
                                 </div>
                               </motion.div>
                             )}
                           </AnimatePresence>
                         </>
                       ) : category.isButton ? (
                         <Button
                           asChild
                           variant="primary"
                           size="sm"
                           className="h-9 rounded-full text-[10px] uppercase tracking-widest px-6 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
                         >
                           <Link to={category.href!}>{category.name}</Link>
                         </Button>
                       ) : (
                         <Link
                           to={category.href!}
                           className={cn(
                             'text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:text-primary relative group',
                             location.pathname === category.href ? 'text-primary' : 'text-white/60'
                           )}
                         >
                           <span className="relative">
                             {category.name}
                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                           </span>
                         </Link>
                       )}
                     </motion.div>
                   ))}
                   <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.35, type: 'spring', stiffness: 300 }}
                     className="flex items-center gap-2"
                   >
                     <button
                       onClick={() => setIsSearchOpen(true)}
                       className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                     >
                       <Search size={18} className="text-white/60 group-hover:text-primary transition-colors" />
                     </button>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-24 left-0 right-0 bottom-0 bg-black/98 backdrop-blur-2xl z-40 flex flex-col p-6 overflow-y-auto"
          >
            <div className="w-full max-w-md mx-auto space-y-2 pb-8">
              {navCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {category.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === category.name ? null : category.name)}
                        className={cn(
                          'w-full flex items-center justify-between text-left text-xl font-heading font-bold py-4 px-6 rounded-xl transition-all duration-300 active:scale-95',
                          activeDropdown === category.name ? 'text-primary bg-primary/10' : 'text-white/40 hover:text-white hover:bg-white/5'
                        )}
                      >
                        {category.name}
                        <ChevronDown size={20} className={cn('transition-transform duration-300', activeDropdown === category.name && 'rotate-180')} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === category.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="pl-6 space-y-1 overflow-hidden"
                          >
                            {category.sections?.map((section) => (
                              <div key={section.title} className="mt-4">
                                <h4 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3 px-6 border-l-2 border-primary/50">{section.title}</h4>
                                {section.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                      'block text-left text-base font-heading font-medium py-3 px-6 rounded-lg transition-all duration-300 active:scale-95',
                                      location.pathname === link.href 
                                        ? 'text-primary bg-primary/10' 
                                        : 'text-white/40 hover:text-white hover:bg-white/5'
                                    )}
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : category.isButton ? (
                    <Button
                      asChild
                      variant="primary"
                      size="lg"
                      className="w-full rounded-full font-mono uppercase tracking-widest py-4 shadow-lg shadow-primary/25 active:scale-95 transition-transform"
                    >
                      <Link to={category.href!} onClick={() => setIsMobileMenuOpen(false)}>{category.name}</Link>
                    </Button>
                  ) : (
                    <Link
                      to={category.href!}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block text-left text-xl font-heading font-bold py-4 px-6 rounded-xl transition-all duration-300 active:scale-95',
                        location.pathname === category.href 
                          ? 'text-primary bg-primary/10' 
                          : 'text-white/40 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {category.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
