import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, FileText, FolderOpen, Briefcase, ArrowRight } from 'lucide-react'
import { blogPosts } from '../../data/blog'
import { projects } from '../../data/projects'
import { services } from '../../data/services'
import { Link } from 'react-router-dom'

interface SearchResult {
  id: string
  type: 'blog' | 'project' | 'service'
  title: string
  description: string
  link: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      setResults([])
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchQuery = query.toLowerCase()
    const filteredResults: SearchResult[] = []

    // Search blog posts
    blogPosts.forEach(post => {
      if (
        post.title.toLowerCase().includes(searchQuery) ||
        post.excerpt.toLowerCase().includes(searchQuery) ||
        post.category.toLowerCase().includes(searchQuery)
      ) {
        filteredResults.push({
          id: post.id,
          type: 'blog',
          title: post.title,
          description: post.excerpt,
          link: `/blog/${post.id}`
        })
      }
    })

    // Search projects
    projects.forEach(project => {
      if (
        project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery) ||
        project.category.toLowerCase().includes(searchQuery) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery))
      ) {
        filteredResults.push({
          id: project.id,
          type: 'project',
          title: project.title,
          description: project.description,
          link: '/projects'
        })
      }
    })

    // Search services
    services.forEach(service => {
      if (
        service.title.toLowerCase().includes(searchQuery) ||
        service.description.toLowerCase().includes(searchQuery) ||
        service.technologies.some(tech => tech.toLowerCase().includes(searchQuery))
      ) {
        filteredResults.push({
          id: service.id,
          type: 'service',
          title: service.title,
          description: service.description,
          link: '/services'
        })
      }
    })

    setResults(filteredResults.slice(0, 10))
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % results.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length)
      } else if (e.key === 'Enter' && results.length > 0) {
        window.location.href = results[selectedIndex].link
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, onClose])

  const getIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <FileText size={16} className="text-primary" />
      case 'project':
        return <FolderOpen size={16} className="text-secondary" />
      case 'service':
        return <Briefcase size={16} className="text-accent" />
      default:
        return <Search size={16} />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post'
      case 'project':
        return 'Project'
      case 'service':
        return 'Service'
      default:
        return type
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
          >
            <div className="glass-card overflow-hidden">
              {/* Search Input */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Search size={20} className="text-muted" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search blog posts, projects, services..."
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/30 text-lg"
                    autoFocus
                  />
                  <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-[10px] text-white/40 font-mono">
                    <span>ESC</span>
                  </kbd>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                {results.length === 0 ? (
                  query.trim() ? (
                    <div className="p-8 text-center text-muted">
                      <Search size={48} className="mx-auto mb-4 opacity-20" />
                      <p className="text-sm">No results found for "{query}"</p>
                    </div>
                  ) : (
                    <div className="p-8 text-center text-muted">
                      <Search size={48} className="mx-auto mb-4 opacity-20" />
                      <p className="text-sm">Type to search across the site</p>
                      <div className="flex justify-center gap-4 mt-4">
                        <kbd className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40 font-mono">
                          <span>↑↓</span> Navigate
                        </kbd>
                        <kbd className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40 font-mono">
                          <span>↵</span> Select
                        </kbd>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="p-2">
                    {results.map((result, index) => (
                      <Link
                        key={result.id}
                        to={result.link}
                        onClick={onClose}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                          index === selectedIndex ? 'bg-primary/10' : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                          {getIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono uppercase text-muted">
                              {getTypeLabel(result.type)}
                            </span>
                          </div>
                          <h4 className="text-white font-medium truncate">{result.title}</h4>
                          <p className="text-muted text-sm truncate">{result.description}</p>
                        </div>
                        <ArrowRight size={16} className="text-white/20 shrink-0" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-white/10 flex items-center justify-between text-[10px] text-muted">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded font-mono">↑↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded font-mono">↵</kbd>
                    to select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/5 rounded font-mono">ESC</kbd>
                    to close
                  </span>
                </div>
                <span>{results.length} results</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
