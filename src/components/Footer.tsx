import { Phone } from 'lucide-react'

const links = {
  services: ['AC Repair', 'Heating Repair', 'Furnace Installation', 'HVAC Maintenance', 'Air Quality', 'Emergency Service'],
  company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Case Studies'],
  areas: ['Riverside', 'Corona', 'Temecula', 'Murrieta', 'Menifee'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-sky-500/10 bg-[#020b18]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-sky-500/30">
                <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L12 8M12 16L12 22M2 12L8 12M16 12L22 12" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <path d="M5.5 5.5L8.5 8.5M15.5 15.5L18.5 18.5M18.5 5.5L15.5 8.5M8.5 15.5L5.5 18.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="font-grotesk font-bold text-xl text-white">Arctic<span className="gradient-text">Pro</span></div>
                <div className="text-sky-400/60 font-medium" style={{ fontSize: '9px', letterSpacing: '2px' }}>HVAC SYSTEMS</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Riverside County's most trusted HVAC company. Precision-engineered comfort for every season.
            </p>
            <a href="tel:+18005551234" className="flex items-center gap-2 text-sky-300 font-semibold hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              (800) 555-1234
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-2">
              {links.services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-2">
              {links.company.map((s) => (
                <li key={s}>
                  <a href="#" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Service Areas</h4>
            <ul className="space-y-2">
              {links.areas.map((s) => (
                <li key={s}>
                  <a href="#areas" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">{s}, CA</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-sky-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 ArcticPro HVAC Systems. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">License #C-20-123456</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
