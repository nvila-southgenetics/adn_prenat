import HeaderCo from '@/components/co/HeaderCo'
import HeroCo from '@/components/co/HeroCo'
import Allies from '@/components/Allies'
import Experience from '@/components/Experience'
import EmpathyCo from '@/components/co/EmpathyCo'
import HowItWorksCo from '@/components/co/HowItWorksCo'
import Benefits from '@/components/Benefits'
import FAQCo from '@/components/co/FAQCo'
import ContactCo from '@/components/co/ContactCo'
import FooterCo from '@/components/co/FooterCo'

export default function ColombiaPage() {
  return (
    <main className="min-h-screen">
      <HeaderCo />
      <HeroCo />
      <Allies />
      <EmpathyCo />
      <Experience />
      <HowItWorksCo />
      <Benefits />
      <FAQCo />
      <ContactCo />
      <FooterCo />
    </main>
  )
}

