import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { FileText, BookOpen, Video, Download } from 'lucide-react'

const resources = [
  { icon: FileText, title: 'Technical Whitepapers', description: 'In-depth guides on architecture, security, and best practices.', count: '12 docs' },
  { icon: BookOpen, title: 'Developer Guides', description: 'Step-by-step tutorials for our open-source tools and frameworks.', count: '24 guides' },
  { icon: Video, title: 'Video Tutorials', description: 'Recorded workshops and conference talks from Antcode Technologies events.', count: '36 videos' },
  { icon: Download, title: 'Templates & Toolkits', description: 'Starter kits, boilerplates, and project templates.', count: '8 kits' },
]

export default function Resources() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Resources"
        title={<>Learn & <span className="text-white/40">Build</span></>}
        description="Free resources, guides, and tools from the Antcode Technologies team."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div key={resource.title} className="glass-card p-8 hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <resource.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{resource.description}</p>
              <span className="text-[10px] font-mono uppercase text-primary">{resource.count}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30 text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">Want More?</h2>
        <p className="text-muted mb-8">Join Antcode Technologies Academy for structured courses and mentorship.</p>
        <Button asChild variant="primary" className="font-mono uppercase tracking-widest">
          <Link to="/academy">Explore Academy</Link>
        </Button>
      </Section>
    </div>
  )
}
