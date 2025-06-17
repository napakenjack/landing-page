import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import PortfolioSection from './components/PortfolioSection'
import SelfIntroductionSection from './components/SelfIntroductionSection'
import ContactSection from './components/ContactSection'
import PricesSection from './components/PricesSection'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <PortfolioSection />
        <SelfIntroductionSection />
        <PricesSection />
        <ContactSection />
      </main>
      <footer>
        <p>&copy; 2025 Aidar. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
