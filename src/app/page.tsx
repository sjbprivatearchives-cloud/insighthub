import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Crisis from '@/components/Crisis'
import Solution from '@/components/Solution'
import Curriculum from '@/components/Curriculum'
import AIAutomation from '@/components/AIAutomation'
import FAQ from '@/components/FAQ'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <Stats />
      <Process />
      <Testimonials />
      <Crisis />
      <Solution />
      <Curriculum />
      <AIAutomation />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingCTA />
    </main>
  )
} 