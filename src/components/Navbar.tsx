import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // scroll effect
  if (typeof window !== 'undefined') {
    window.onscroll = () => setScrolled(window.scrollY > 60)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/30 border-b border-sky-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-8 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-sky-500/20 rounded-xl rotate-45 group-hover:scale-110 transition-transform" />
            <svg className="w-5 h-5 text-sky-400 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L12 8M12 16L12 22M2 12L8 12M16 12L22 12" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <path d="M5.5 5.5L8.5 8.5M15.5 15.5L18.5 18.5M18.5 5.5L15.5 8.5M8.5 15.5L5.5 18.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="font-grotesk font-bold text-lg text-white leading-none">
              Arctic<span className="gradient-text">Pro</span>
            </div>
            <div className="text-sky-400/60 font-medium leading-none mt-0.5" style={{ fontSize: '8px', letterSpacing: '2px' }}>HVAC SYSTEMS</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-sky-300 transition-colors duration-200 relative group">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sky-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-sky-300 font-semibold hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            (800) 555-1234
          </a>
          <a href="#contact" className="btn-primary text-sm px-5 py-3">
            <Zap className="w-4 h-4" />
            Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white p-2 -mr-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-sky-500/10 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.label} href={link.href}
                  className="text-slate-300 hover:text-sky-300 font-medium py-1.5 transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="tel:+18005551234" className="flex items-center gap-2 text-sky-300 font-semibold py-1.5">
                <Phone className="w-4 h-4" /> (800) 555-1234
              </a>
              <a href="#contact" className="btn-primary w-full text-center mt-1" onClick={() => setMobileOpen(false)}>
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
