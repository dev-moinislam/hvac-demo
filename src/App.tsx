import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBrands from './components/TrustedBrands'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import BeforeAfter from './components/BeforeAfter'
import EmergencyCTA from './components/EmergencyCTA'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import Financing from './components/Financing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[#020b18] text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <EmergencyCTA />
        <Testimonials />
        <ServiceAreas />
        <Financing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
