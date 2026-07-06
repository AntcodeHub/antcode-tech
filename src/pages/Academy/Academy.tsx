import { motion } from 'framer-motion'
import { PageHero } from '../../components/layout/PageHero'
import { Section } from '../../components/layout/Section'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { courses, mentors, learningPaths } from '../../data/academy'
import { Star, Clock, Users, BookOpen } from 'lucide-react'

export default function Academy() {
  return (
    <div className="flex flex-col">
      <PageHero
        label="Antcode Technology Academy"
        title={<>Learn. Build. <span className="text-white/40">Lead.</span></>}
        description="Structured courses, mentorship, and certifications designed to launch your technology career."
      />

      <Section>
        <div className="mb-16">
          <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-4 block">Courses</span>
          <h2 className="text-3xl font-heading font-bold text-white">Featured Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-5 space-y-3">
                <span className="text-[10px] font-mono uppercase text-primary">{course.level}</span>
                <h3 className="font-heading font-bold text-white">{course.title}</h3>
                <div className="flex items-center gap-4 text-[10px] font-mono text-muted">
                  <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {course.students}</span>
                  <span className="flex items-center gap-1"><Star size={12} className="text-warning" /> {course.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-4 block">Roadmaps</span>
            <h2 className="text-3xl font-heading font-bold text-white mb-8">Learning Paths</h2>
            <div className="space-y-4">
              {learningPaths.map((path) => (
                <div key={path.title} className="glass-card p-5 flex items-center justify-between hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4">
                    <BookOpen size={20} className="text-primary" />
                    <div>
                      <h3 className="font-heading font-semibold text-white">{path.title}</h3>
                      <p className="text-[10px] font-mono text-muted">{path.courses} courses · {path.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-4 block">Mentors</span>
            <h2 className="text-3xl font-heading font-bold text-white mb-8">Learn from Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mentors.map((mentor) => (
                <div key={mentor.name} className="glass-card p-5">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-sm font-mono text-primary mb-3">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-heading font-semibold text-white">{mentor.name}</h3>
                  <p className="text-sm text-muted">{mentor.role}</p>
                  <p className="text-[10px] font-mono text-primary mt-2 uppercase">{mentor.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Button asChild variant="primary" size="lg" className="font-mono uppercase tracking-widest">
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}
