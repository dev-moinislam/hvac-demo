import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const areas = [
  { name: 'Riverside', primary: true },
  { name: 'Corona', primary: true },
  { name: 'Temecula', primary: true },
  { name: 'Murrieta', primary: true },
  { name: 'Menifee', primary: false },
  { name: 'Hemet', primary: false },
  { name: 'Perris', primary: false },
  { name: 'Lake Elsinore', primary: false },
  { name: 'Moreno Valley', primary: false },
  { name: 'Eastvale', primary: false },
  { name: 'Norco', primary: false },
  { name: 'Wildomar', primary: false },
  { name: 'Canyon Lake', primary: false },
  { name: 'San Jacinto', primary: false },
  { name: 'Beaumont', primary: false },
  { name: 'Banning', primary: false },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(14,165,233,0.05) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-sky-500/20">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span className="text-sky-400 text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="font-grotesk font-bold text-4xl lg:text-5xl text-white mb-5 leading-tight">
              We Come to <span className="gradient-text">You</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Proudly serving Riverside County and surrounding areas. With our large fleet of fully-stocked service vehicles, we're typically at your door within 60 minutes.
            </p>

            <div className="glass rounded-2xl p-6 border border-sky-500/10 mb-7">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-xl bg-sky-500/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">50-Mile Service Radius</div>
                  <div className="text-slate-400 text-sm">Centered in Riverside, CA</div>
                </div>
              </div>
              <p className="text-slate-500 text-sm">Not sure if you're in our area? Call us — if we can get to you, we will.</p>
            </div>

            <a href="tel:+18005551234" className="btn-primary">
              <MapPin className="w-4 h-4" />
              Check My Address
            </a>
          </motion.div>

          {/* Right: Area pills */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex flex-wrap gap-3">
              {areas.map((area, i) => (
                <motion.div key={area.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.035, duration: 0.35 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 border cursor-default transition-all duration-300 ${
                    area.primary
                      ? 'glass-strong border-sky-400/40 text-sky-300 font-semibold'
                      : 'glass border-sky-500/15 text-slate-400 hover:border-sky-500/30 hover:text-slate-200'
                  }`}
                >
                  <MapPin className={`w-3 h-3 flex-shrink-0 ${area.primary ? 'text-sky-400' : 'text-slate-500'}`} />
                  <span className="text-sm">{area.name}</span>
                  {area.primary && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />}
                </motion.div>
              ))}
            </div>
            <p className="text-slate-600 text-xs mt-5">
              <span className="text-sky-400">●</span>&nbsp;Primary area &nbsp;
              <span className="text-slate-700">●</span>&nbsp;Extended coverage
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
