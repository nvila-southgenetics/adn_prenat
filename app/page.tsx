import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Empathy from '@/components/Empathy'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Empathy />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
