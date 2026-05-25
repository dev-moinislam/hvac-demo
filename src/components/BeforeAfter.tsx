import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeftRight, ChevronLeft, ChevronRight, TrendingDown, TrendingUp, CheckCircle, XCircle } from 'lucide-react'

const transformations = [
  {
    title: 'Outdated Central Unit → Smart System',
    location: 'Riverside Home · 2,400 sq ft',
    savings: '$200/mo',
    savingsLabel: 'Monthly Savings',
    savingsColor: 'from-sky-500 to-cyan-400',
    before: {
      heading: 'Before',
      sub: '18-year-old system · $340/mo bills',
      details: [
        'R-22 refrigerant (banned)',
        'SEER 8 efficiency rating',
        'Constant breakdowns',
        'Uneven temperatures',
      ],
    },
    after: {
      heading: 'After',
      sub: 'New Carrier Infinity · $140/mo bills',
      details: [
        'R-410A refrigerant',
        'SEER 21 efficiency',
        'Smart WiFi thermostat',
        'Whole-home zone control',
      ],
    },
  },
  {
    title: 'Failed Furnace → High-Efficiency Install',
    location: 'Downtown Condo · 1,800 sq ft',
    savings: '99% AFUE',
    savingsLabel: 'Efficiency Achieved',
    savingsColor: 'from-violet-500 to-purple-400',
    before: {
      heading: 'Before',
      sub: 'Dead furnace in January · 10-year-old unit',
      details: [
        '80% AFUE efficiency',
        'No zone control',
        'Carbon monoxide risk',
        'Single-stage heating',
      ],
    },
    after: {
      heading: 'After',
      sub: 'Lennox SLP99V · same-day install',
      details: [
        '99% AFUE efficiency',
        'Variable speed motor',
        'CO detector installed',
        'Whisper-quiet operation',
      ],
    },
  },
  {
    title: 'Poor Air Quality → Purified Home',
    location: 'Family Home · 3 Allergy Sufferers',
    savings: '97%',
    savingsLabel: 'Allergen Reduction',
    savingsColor: 'from-emerald-500 to-teal-400',
    before: {
      heading: 'Before',
      sub: 'Constant allergies · musty odors',
      details: [
        'Basic 1" panel filters',
        '65% relative humidity',
        'No UV purification',
        'Mold growth in ducts',
      ],
    },
    after: {
      heading: 'After',
      sub: 'iWave-R + whole-home dehumidifier',
      details: [
        'MERV-16 filtration',
        '45% ideal humidity',
        'UV-C air purification',
        'Allergen-free certified',
      ],
    },
  },
]

export default function BeforeAfter() {
  const [active, setActive] = useState(0)
  const cur = transformations[active]

  const prev = () => setActive(i => (i - 1 + transformations.length) % transformations.length)
  const next = () => setActive(i => (i + 1) % transformations.length)

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-sky-500/20">
            <ArrowLeftRight className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-sm font-semibold">Real Transformations</span>
          </div>
          <h2 className="font-grotesk font-bold text-4xl lg:text-5xl text-white mb-4">
            See the <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real results from real customers. Every transformation backed by data.
          </p>
        </motion.div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl border border-sky-500/15 overflow-hidden"
          >
            {/* Card top bar */}
            <div
              className="px-6 py-5 border-b border-sky-500/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              style={{ background: 'rgba(14,165,233,0.04)' }}
            >
              <div>
                <h3 className="font-grotesk font-bold text-white text-lg lg:text-xl leading-snug">
                  {cur.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{cur.location}</p>
              </div>
              {/* Savings badge */}
              <div className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${cur.savingsColor} bg-opacity-10`}
                style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.25)' }}>
                <TrendingUp className="w-4 h-4 text-sky-300" />
                <div>
                  <span className="font-grotesk font-bold text-sky-300 text-lg leading-none">{cur.savings}</span>
                  <span className="text-slate-400 text-xs ml-2">{cur.savingsLabel}</span>
                </div>
              </div>
            </div>

            {/* Before / After grid — SIDE BY SIDE, NO OVERLAP */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">

              {/* BEFORE */}
              <div className="p-6 lg:p-8" style={{ background: 'linear-gradient(145deg, rgba(239,68,68,0.06) 0%, transparent 60%)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-red-400 font-grotesk font-bold text-base tracking-wide uppercase">Before</div>
                    <div className="text-slate-400 text-xs mt-0.5">{cur.before.sub}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {cur.before.details.map(d => (
                    <li key={d} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                      <span className="text-slate-300 leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-red-500/10">
                  <div className="flex items-center gap-2 text-red-400/70 text-xs font-medium">
                    <TrendingDown className="w-4 h-4" />
                    High cost · Low efficiency · Unreliable
                  </div>
                </div>
              </div>

              {/* AFTER */}
              <div className="p-6 lg:p-8" style={{ background: 'linear-gradient(145deg, rgba(14,165,233,0.08) 0%, transparent 60%)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sky-400 font-grotesk font-bold text-base tracking-wide uppercase">After</div>
                    <div className="text-slate-400 text-xs mt-0.5">{cur.after.sub}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {cur.after.details.map(d => (
                    <li key={d} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0 mt-2" />
                      <span className="text-slate-200 leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-sky-500/10">
                  <div className="flex items-center gap-2 text-sky-400/70 text-xs font-medium">
                    <TrendingUp className="w-4 h-4" />
                    Peak efficiency · Reliable · Cost-saving
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-11 h-11 glass rounded-xl border border-sky-500/20 flex items-center justify-center hover:border-sky-400/40 hover:text-white transition-all text-slate-400"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {transformations.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? '#38bdf8' : '#334155',
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 glass rounded-xl border border-sky-500/20 flex items-center justify-center hover:border-sky-400/40 hover:text-white transition-all text-slate-400"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Case count */}
        <p className="text-center text-slate-600 text-sm mt-5">
          {active + 1} of {transformations.length} transformations
        </p>
      </div>
    </section>
  )
}
