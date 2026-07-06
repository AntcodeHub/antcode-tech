import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { PageHero } from '../../components/layout/PageHero';
import { Section } from '../../components/layout/Section';
import { blogPosts } from '../../data/blog';
import {
  Clock,
  ArrowLeft,
  Calendar,
  Heart,
  Share2,
  Link2,
  MessageSquare,
  User,
  Tag
} from 'lucide-react';
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Button } from '../../components/ui/Button';

// ===== Markdown Renderer (unchanged, kept for completeness) =====
export function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n');
  let inCodeBlock = false;
  let codeContent = '';

  const renderLine = (line: string, index: number) => {
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      if (inCodeBlock) {
        return null;
      }
      return (
        <pre
          key={index}
          className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4 border border-white/10"
        >
          <code className="text-primary font-mono text-sm">{codeContent}</code>
        </pre>
      );
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      return null;
    }

    if (line.startsWith('# ')) {
      return (
        <h1 key={index} className="text-4xl font-heading font-bold text-white mb-6 mt-8">
          {line.slice(2)}
        </h1>
      );
    }
    if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="text-3xl font-heading font-bold text-white mb-4 mt-8">
          {line.slice(3)}
        </h2>
      );
    }
    if (line.startsWith('### ')) {
      return (
        <h3 key={index} className="text-2xl font-heading font-bold text-white mb-3 mt-6">
          {line.slice(4)}
        </h3>
      );
    }
    if (line.startsWith('- ')) {
      return (
        <li key={index} className="text-muted ml-4 mb-2">
          {line.slice(2)}
        </li>
      );
    }
    if (line.match(/^\d+\. /)) {
      return (
        <li key={index} className="text-muted ml-4 mb-2 list-decimal">
          {line.slice(line.indexOf(' ') + 1)}
        </li>
      );
    }
    if (line.trim() === '') {
      return <br key={index} />;
    }
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <p key={index} className="text-muted leading-relaxed mb-4">
          <strong className="text-white font-semibold">{line.slice(2, -2)}</strong>
        </p>
      );
    }
    if (line.includes('**')) {
      const parts = line.split('**');
      return (
        <p key={index} className="text-muted leading-relaxed mb-4">
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-white font-semibold">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    if (line.includes('`')) {
      const parts = line.split('`');
      return (
        <p key={index} className="text-muted leading-relaxed mb-4">
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <code
                key={i}
                className="bg-white/10 text-primary px-2 py-1 rounded text-sm font-mono"
              >
                {part}
              </code>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    return (
      <p key={index} className="text-muted leading-relaxed mb-4">
        {line}
      </p>
    );
  };

  return (
    <div className="space-y-4">
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
}

// ===== Helper: strip HTML from share title =====
function getPlainTitle(title: string) {
  const doc = new DOMParser().parseFromString(title, 'text/html');
  return doc.body.textContent || '';
}

// ===== Blog Post Page =====
export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  // Reading progress
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const { top, height } = contentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = Math.max(0, windowHeight - top);
      const total = height + windowHeight;
      const percent = Math.min(100, (scrolled / total) * 100);
      setProgress(percent);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Like functionality
  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem(`blog_likes_${id}`);
    return stored ? parseInt(stored, 10) : post?.likes || 0;
  });
  const [liked, setLiked] = useState(() => {
    return localStorage.getItem(`blog_liked_${id}`) === 'true';
  });

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikes(prev => (newLiked ? prev + 1 : prev - 1));
    localStorage.setItem(`blog_liked_${id}`, String(newLiked));
    localStorage.setItem(`blog_likes_${id}`, String(newLiked ? likes + 1 : likes - 1));
  };

  // Share & copy link
  const postUrl = window.location.href;
  const shareTitle = post ? getPlainTitle(post.title) : '';
  

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareTitle
    )}&url=${encodeURIComponent(postUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
  };

  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = postUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Recent posts (excluding current)
  const recentPosts = blogPosts
    .filter(p => p.id !== id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 z-50 h-1 bg-primary/30 w-full">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <PageHero label={post.category} title={post.title} description={post.excerpt} />

      <Section>
        <div className="max-w-6xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex flex-col lg:flex-row gap-12" ref={contentRef}>
            {/* Main Content */}
            <article className="lg:w-2/3">
              <div className="glass-card p-6 md:p-10 mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                />

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-muted mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} /> {post.readTime}
                  </span>
                  {post.author && (
                    <span className="flex items-center gap-2">
                      <User size={14} /> {post.author}
                    </span>
                  )}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted font-mono"
                      >
                        <Tag size={12} /> {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Post content */}
                <MarkdownContent content={post.content} />
              </div>

              {/* Actions: Like, Share, Comment placeholder */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                <div className="flex items-center gap-4">
                  {/* Like button */}
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      liked
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'border-white/10 text-muted hover:border-primary/50 hover:text-primary'
                    }`}
                    aria-label={liked ? 'Unlike this post' : 'Like this post'}
                  >
                    <Heart
                      size={18}
                      className={`transition-transform ${liked ? 'fill-current scale-110' : ''}`}
                    />
                    <span className="text-sm font-medium">{likes}</span>
                  </button>

                  {/* Share dropdown */}
                  <div className="relative group">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted hover:border-primary/50 hover:text-primary transition-colors">
                      <Share2 size={18} />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 glass-card p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <FaXTwitter size={16} /> Twitter
                      </a>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <FaLinkedin size={16} /> LinkedIn
                      </a>
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <FaFacebook size={16} /> Facebook
                      </a>
                      <button
                        onClick={copyLink}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors w-full text-left"
                      >
                        <Link2 size={16} /> {copied ? 'Copied!' : 'Copy link'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comment trigger */}
                <Button
                  asChild
                  variant="ghost"
                  className="font-mono uppercase tracking-widest text-xs gap-2"
                >
                  <a href="#comments">
                    <MessageSquare size={16} /> Join the Discussion
                  </a>
                </Button>
              </div>

              {/* Author card */}
              {post.author && (
                <div className="glass-card p-6 mb-12 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xl font-bold flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-semibold text-lg mb-1">
                      {post.author}
                    </h4>
                    <p className="text-muted text-sm mb-4">
                      Passionate about sharing knowledge and empowering developers.
                    </p>
                    <Button variant="ghost" size="sm" className="text-primary">
                      View all posts
                    </Button>
                  </div>
                </div>
              )}

              {/* Comments placeholder */}
              <div id="comments" className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                  <MessageSquare size={24} /> Comments
                </h3>
                <p className="text-muted mb-6">
                  We'd love to hear your thoughts! Leave a comment below.
                </p>
                <form className="space-y-4">
                  <textarea
                    rows={4}
                    placeholder="Write your comment..."
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white placeholder:text-muted focus:outline-none focus:border-primary/50 resize-none"
                  />
                  <Button type="submit" variant="primary">
                    Post Comment
                  </Button>
                </form>
              </div>
            </article>

            {/* Sidebar: Recent Posts */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24">
                <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-6">
                  Recent Posts
                </h4>
                <div className="flex flex-col gap-4">
                  {recentPosts.map(rp => (
                    <Link
                      key={rp.id}
                      to={`/blog/${rp.id}`}
                      className="glass-card p-4 hover:border-primary/30 transition-colors group"
                    >
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h5 className="text-white font-heading font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {rp.title}
                      </h5>
                      <div className="flex items-center gap-4 text-xs text-muted font-mono">
                        <span>{rp.date}</span>
                        <span>{rp.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Newsletter / CTA */}
                <div className="mt-8 glass-card p-6 bg-primary/5 border-primary/20">
                  <h4 className="text-white font-heading font-semibold mb-2">
                    Stay in the loop
                  </h4>
                  <p className="text-muted text-sm mb-4">
                    Get the latest posts delivered straight to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-muted focus:outline-none focus:border-primary/50 mb-3"
                  />
                  <Button variant="primary" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/10">
            <Button asChild variant="ghost" className="font-mono uppercase tracking-widest text-xs">
              <Link to="/blog">
                <ArrowLeft size={14} className="mr-2" /> Back to Blog
              </Link>
            </Button>
            <Button asChild variant="primary" className="font-mono uppercase tracking-widest text-xs">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}