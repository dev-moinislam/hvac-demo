import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael R.',
    location: 'Riverside, CA',
    rating: 5,
    date: 'March 2024',
    text: 'Our AC died in the middle of July — 107° outside. ArcticPro had a tech at our door within 45 minutes. Fixed in under 2 hours. These guys are the real deal. Worth every penny.',
    service: 'Emergency AC Repair',
    initials: 'MR',
    color: 'from-sky-600 to-blue-700',
  },
  {
    name: 'Sarah T.',
    location: 'Corona, CA',
    rating: 5,
    date: 'January 2024',
    text: 'Replaced our 20-year-old system with a new Carrier. Our energy bill dropped from $340 to $138 the very first month. The crew was professional, fast, and left the house spotless.',
    service: 'Full System Replacement',
    initials: 'ST',
    color: 'from-violet-600 to-purple-700',
  },
  {
    name: 'David & Kim L.',
    location: 'Temecula, CA',
    rating: 5,
    date: 'November 2023',
    text: 'We\'ve used three HVAC companies over the years. ArcticPro is in a completely different league. Honest, transparent pricing, and they actually explain what they\'re doing. We\'re customers for life.',
    service: 'Maintenance Plan',
    initials: 'DL',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    name: 'Jennifer M.',
    location: 'Murrieta, CA',
    rating: 5,
    date: 'August 2023',
    text: 'After 3 other companies told me I needed a $12,000 replacement, ArcticPro diagnosed the real issue — a $280 repair. They could have sold me anything. Instead they were honest. That\'s rare.',
    service: 'AC Diagnostic & Repair',
    initials: 'JM',
    color: 'from-rose-600 to-pink-700',
  },
  {
    name: 'Robert K.',
    location: 'Menifee, CA',
    rating: 5,
    date: 'February 2024',
    text: 'Installed an iWave air purifier and whole-home dehumidifier. My wife\'s allergies are basically gone. The air quality difference is incredible. Best home improvement decision we\'ve made.',
    service: 'Air Quality Solutions',
    initials: 'RK',
    color: 'from-amber-600 to-orange-700',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(14,165,233,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-sky-500/20">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sky-400 text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="font-grotesk font-bold text-5xl text-white mb-4">
            Trusted by <span className="gradient-text">12,000+</span> Homeowners
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-slate-400 ml-3 text-lg font-medium">4.9 / 5.0</span>
            <span className="text-slate-500 ml-1">(1,847 reviews)</span>
          </div>
        </motion.div>

        {/* Main testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-10 border border-sky-500/15 relative overflow-hidden"
            >
              {/* Quote icon */}
              <Quote className="absolute top-8 right-10 w-20 h-20 text-sky-500/10" />

              <div className="flex items-start gap-6 mb-6">
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center flex-shrink-0 font-grotesk font-bold text-white text-xl`}>
                  {current.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">{current.name}</div>
                  <div className="text-slate-400 text-sm">{current.location} · {current.date}</div>
                  <div className="mt-1">
                    <span className="glass text-sky-400 text-xs font-medium px-2 py-0.5 rounded-md border border-sky-500/20">
                      {current.service}
                    </span>
                  </div>
                </div>
                <div className="ml-auto flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-slate-200 text-xl leading-relaxed font-light">
                "{current.text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 glass rounded-xl border border-sky-500/20 flex items-center justify-center hover:border-sky-400/40 transition-all hover:text-white text-slate-400">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-sky-400 w-8' : 'bg-slate-600 w-2'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 glass rounded-xl border border-sky-500/20 flex items-center justify-center hover:border-sky-400/40 transition-all hover:text-white text-slate-400">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>


      </div>
    </section>
  )
}
