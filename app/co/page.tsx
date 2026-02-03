import HeaderCo from '@/components/co/HeaderCo'
import HeroCo from '@/components/co/HeroCo'
import Allies from '@/components/Allies'
import Experience from '@/components/Experience'
import GlobalTrust from '@/components/GlobalTrust'
import EmpathyCo from '@/components/co/EmpathyCo'
import HowItWorksCo from '@/components/co/HowItWorksCo'
import Benefits from '@/components/Benefits'
import FAQCo from '@/components/co/FAQCo'
import ContactCTACo from '@/components/co/ContactCTACo'
import FooterCo from '@/components/co/FooterCo'
import { countries } from '@/config/countries.config'

export default function ColombiaPage() {
  const country = countries.co
  return (
    <main className="min-h-screen">
      <HeaderCo />
      <HeroCo />
      <Allies />
      <EmpathyCo />
      <Experience />
      <HowItWorksCo />
      <GlobalTrust />
      <Benefits country={country} />
      <FAQCo />
      <ContactCTACo />
      <FooterCo />
    </main>
  )
}

