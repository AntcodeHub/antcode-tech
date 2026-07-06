import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '../../data/blog'
import { Section } from '../layout/Section'

export function BlogPreview() {
  return (
    <Section id="blog" className="bg-surface/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            Latest from the <span className="text-white/40">Blog</span>
          </h2>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:text-white transition-colors"
        >
          All Articles <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Link to="/blog" className="group block glass-card overflow-hidden h-full hover:border-primary/30 transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary">{post.category}</span>
                <h3 className="font-heading font-semibold text-white group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/30">
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
