import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Allies from '@/components/Allies'
import Experience from '@/components/Experience'
import GlobalTrust from '@/components/GlobalTrust'
import Empathy from '@/components/Empathy'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Allies />
      <Empathy />
      <Experience />
      <HowItWorks />
      <GlobalTrust />
      <Benefits />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  )
}
