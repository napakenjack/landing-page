import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomeSection from '../components/HomeSection'
import SelfIntroductionSection from '../components/SelfIntroductionSection'
import PricesSection from '../components/PricesSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const targetId = location.state?.scrollTo
    if (!targetId) {
      return
    }

    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.state])

  return (
    <>
      <HomeSection />
      <SelfIntroductionSection />
      <PricesSection />
      <ContactSection />
    </>
  )
}
