import { motion } from 'framer-motion'
import { Phone, AlertTriangle, Clock, MapPin } from 'lucide-react'

export default function EmergencyCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(239,68,68,0.12) 0%, rgba(2,11,24,1) 70%)',
        }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Pulsing emergency icon */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-20 h-20 rounded-full border-2 border-red-500/50 flex items-center justify-center"
              style={{ boxShadow: '0 0 40px rgba(239,68,68,0.3)' }}
            >
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </motion.div>
          </div>

          <h2 className="font-grotesk font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            HVAC Emergency?{' '}
            <span style={{ color: '#f87171' }}>We're Ready Now.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            System failure at 2AM? Furnace dead in winter? AC out during a heat wave?
            Our emergency team is dispatched in minutes — not hours.
          </p>

          {/* Key promises */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Clock, text: '60-Min Guaranteed Response' },
              { icon: MapPin, text: 'Serving 50-Mile Radius' },
              { icon: Phone, text: 'Live Dispatchers 24/7' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 glass rounded-xl px-5 py-3 border border-red-500/20">
                <Icon className="w-5 h-5 text-red-400" />
                <span className="text-slate-200 font-semibold">{text}</span>
              </div>
            ))}
          </div>

          {/* Emergency CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+18005551234"
              className="btn-emergency inline-flex items-center gap-3 text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-6 h-6" />
              Call Emergency Line: (800) 555-1234
            </motion.a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg">
              Schedule Online
            </a>
          </div>

          <p className="text-slate-600 text-sm mt-6">
            No extra charges for nights, weekends, or holidays. Flat-rate pricing always.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
