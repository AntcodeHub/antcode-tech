import { Hero } from '../../components/hero/Hero'
import { TrustLogos } from '../../components/sections/TrustLogos'
import { StatsSection } from '../../components/sections/StatsSection'
import { AboutPreview } from '../../components/sections/AboutPreview'
import { OurStory } from '../../components/sections/OurStory'
import { OurTeam } from '../../components/sections/OurTeam'
import { HowWeWork } from '../../components/sections/HowWeWork'
import { EcosystemSection } from '../../components/sections/EcosystemSection'
import { ServicesGrid } from '../../components/services/ServicesGrid'
import { WhyChooseUs } from '../../components/sections/WhyChooseUs'
import { ProjectsCarousel } from '../../components/sections/ProjectsCarousel'
import { IndustriesGrid } from '../../components/sections/IndustriesGrid'
import { ProcessTimeline } from '../../components/sections/ProcessTimeline'
import { TestimonialsSlider } from '../../components/sections/TestimonialsSlider'
import { CommunityPreview } from '../../components/sections/CommunityPreview'
import { BlogPreview } from '../../components/sections/BlogPreview'
import { FAQ } from '../../components/faq/FAQ'
import { FinalCTA } from '../../components/sections/FinalCTA'
// import { ClientLogos } from '../../components/sections/ClientLogos'


export default function Home() {
  return (
    <div className="flex flex-col relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50 halftone-bg" />

      <Hero />
      {/* <ClientLogos /> */}
      <TrustLogos />
      <StatsSection />
      <AboutPreview />
      <OurStory />
      <OurTeam />
      <HowWeWork />
      <EcosystemSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectsCarousel />
      <IndustriesGrid />
      <ProcessTimeline />
      
      <TestimonialsSlider />
      <CommunityPreview />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
