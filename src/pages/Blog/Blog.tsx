import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { blogPosts } from '../../data/blog'
import { Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = ['All', 'AI', 'React', 'Cybersecurity']

export default function Blog() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Blog"
        title={<>Insights & <span className="text-white/40">Engineering</span></>}
        description="Technical articles, tutorials, and thought leadership from the Antcode Technology team."
      />

      <Section>
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${
                cat === 'All' ? 'bg-primary text-white' : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card overflow-hidden group hover:border-primary/30 transition-all cursor-pointer h-full"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary">{post.category}</span>
                    <span className="text-[10px] font-mono text-white/30">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 pt-2">
                    <Clock size={12} /> {post.readTime}
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}
