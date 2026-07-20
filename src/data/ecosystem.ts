import { Users, Cpu, GitBranch, FlaskConical } from 'lucide-react'

export const ecosystemUnits = [
  {
    id: 'community',
    title: 'Antcode Technology Community',
    description: 'A thriving network of developers, innovators, and tech enthusiasts across Africa and beyond.',
    icon: Users,
    href: '/community',
    color: 'from-primary/20 to-primary/5',
    accent: '#2563EB',
  },
  {
    id: 'technology',
    title: 'Antcode Technology',
    description: 'Enterprise-grade software engineering, AI solutions, and digital transformation services.',
    icon: Cpu,
    href: '/technology',
    color: 'from-secondary/20 to-secondary/5',
    accent: '#7C3AED',
  },
 
  {
    id: 'open-source',
    title: 'Open Source',
    description: 'Tools, libraries, and frameworks built in the open for the global developer community.',
    icon: GitBranch,
    href: '/open-source',
    color: 'from-success/20 to-success/5',
    accent: '#10B981',
  },
  {
    id: 'research',
    title: 'Research Labs',
    description: 'Cutting-edge research in AI, distributed systems, and emerging technologies.',
    icon: FlaskConical,
    href: '/technology#research',
    color: 'from-error/20 to-error/5',
    accent: '#EF4444',
  },
]
