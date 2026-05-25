import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Zap, Shield, Clock, Star, ChevronDown, Award } from 'lucide-react'
import ParticleField from './ParticleField'

const stats = [
  { value: 12000, suffix: '+', label: 'Homes Serviced' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 24, suffix: '/7', label: 'Emergency Service' },
  { value: 15, suffix: 'yr', label: 'In Business' },
]

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, active])
  return count
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 2000, inView)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.5 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className="text-center py-2">
      <div className="stat-number">{count.toLocaleString()}{suffix}</div>
      <div className="text-slate-400 text-sm font-medium mt-1">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  useEffect(() => {
    const fn = (e: MouseEvent) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  const px = (mouse.x - 0.5) * 24
  const py = (mouse.y - 0.5) * 16

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(14,165,233,0.18) 0%, transparent 60%),' +
          'radial-gradient(ellipse 50% 40% at 80% 75%, rgba(34,211,238,0.07) 0%, transparent 50%),' +
          '#020b18',
      }}
    >
      <ParticleField />

      {/* grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.04) 1px,transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `translate(${px * 0.3}px,${py * 0.3}px)`,
          transition: 'transform 0.1s ease',
        }}
      />

      {/* Orbs */}
      <div className="orb w-[700px] h-[700px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(14,165,233,0.5) 0%,transparent 70%)', top: '-220px', left: '-220px', transform: `translate(${px * 0.5}px,${py * 0.5}px)` }} />
      <div className="orb w-[450px] h-[450px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(34,211,238,0.4) 0%,transparent 70%)', bottom: '-120px', right: '-120px', transform: `translate(${-px * 0.3}px,${-py * 0.3}px)` }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 xl:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center min-h-[70vh]">

          {/* ── LEFT ── */}
          <div className="flex flex-col justify-center">
            {/* Emergency badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start glass rounded-full px-4 py-2 mb-7 border border-red-500/30">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold">24/7 Emergency Service Available</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-grotesk font-bold leading-[1.06] mb-6 text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-white">Comfort</span><br />
              <span className="gradient-text">Engineered</span><br />
              <span className="text-white">for Every Season</span>
            </motion.h1>

            {/* Sub */}
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
              Elite HVAC solutions engineered for peak performance. From precision installations to emergency repairs — we deliver comfort you can feel.
            </motion.p>

            {/* Trust pills */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-9">
              {[
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: Clock, text: 'Same-Day Repair' },
                { icon: Star, text: '5-Star Rated' },
                { icon: Award, text: 'NATE Certified' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 glass rounded-lg px-3 py-2 text-sm text-sky-300 font-medium border border-sky-500/15">
                  <Icon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-base">
                <Zap className="w-5 h-5" />
                Get Free Estimate
              </a>
              <a href="tel:+18005551234" className="btn-emergency text-base">
                <Phone className="w-5 h-5" />
                Emergency Call Now
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: 3D HVAC Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
            style={{ transform: `translate(${px * -0.4}px,${py * -0.4}px)`, transition: 'transform 0.1s ease' }}
          >
            <HvacVisual />
          </motion.div>
        </div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 lg:mt-16 glass rounded-2xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border border-sky-500/10"
        >
          {stats.map(s => <StatCounter key={s.label} {...s} />)}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 z-10 pointer-events-none">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ── HVAC SVG Visual ── */
function HvacVisual() {
  return (
    <div className="relative w-[440px] h-[440px] xl:w-[500px] xl:h-[500px]">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-sky-500/15 animate-spin-slow" />
      <div className="absolute inset-6 rounded-full border border-sky-400/08"
        style={{ animation: 'spin-slow 14s linear infinite reverse' }} />

      {/* Central unit */}
      <div className="absolute inset-16 glass-strong rounded-3xl border border-sky-400/25 flex items-center justify-center glow-blue animate-pulse-glow">
        <svg viewBox="0 0 120 120" className="w-44 h-44" fill="none">
          <rect x="18" y="28" width="84" height="64" rx="8"
            fill="rgba(14,165,233,0.12)" stroke="rgba(14,165,233,0.5)" strokeWidth="1.5" />
          {[38,48,58,68,78].map(y => (
            <line key={y} x1="28" y1={y} x2="92" y2={y}
              stroke="rgba(56,189,248,0.35)" strokeWidth="1.5" strokeLinecap="round" />
          ))}
          <rect x="32" y="35" width="32" height="20" rx="3"
            fill="rgba(14,165,233,0.2)" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
          <text x="48" y="48" textAnchor="middle" fill="rgba(186,230,253,0.9)"
            fontSize="9" fontFamily="Space Grotesk,sans-serif" fontWeight="600">72°F</text>
          <circle cx="82" cy="44" r="11" fill="none" stroke="rgba(14,165,233,0.4)" strokeWidth="1.5" />
          <path d="M82 33 Q93 44 82 55 Q71 44 82 33Z" fill="rgba(56,189,248,0.22)" />
          <path d="M71 44 Q82 33 93 44 Q82 55 71 44Z" fill="rgba(56,189,248,0.22)" />
          <rect x="38" y="92" width="9" height="18" rx="2"
            fill="rgba(14,165,233,0.28)" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
          <rect x="73" y="92" width="9" height="18" rx="2"
            fill="rgba(14,165,233,0.28)" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
          <path d="M42 28 L42 16 Q42 10 36 10 L22 10"
            stroke="rgba(14,165,233,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M78 28 L78 16 Q78 10 84 10 L98 10"
            stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Floating badges */}
      <motion.div className="absolute top-8 left-2 glass rounded-xl px-3 py-2 border border-sky-400/30"
        animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
        <div className="text-sky-300 font-grotesk font-bold text-base">64°F</div>
        <div className="text-sky-500 text-xs">Cooling</div>
      </motion.div>

      <motion.div className="absolute bottom-8 right-2 glass rounded-xl px-3 py-2 border border-orange-400/30"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}>
        <div className="text-orange-300 font-grotesk font-bold text-base">78°F</div>
        <div className="text-orange-500 text-xs">Heating</div>
      </motion.div>

      <motion.div className="absolute top-1/2 -translate-y-1/2 right-0 glass rounded-xl px-3 py-2 border border-green-400/30"
        animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}>
        <div className="text-green-300 font-grotesk font-bold text-sm">SEER 20</div>
        <div className="text-green-500 text-xs">Efficiency</div>
      </motion.div>

      {/* Orbiting dots */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const r = 195; const rad = (angle * Math.PI) / 180
        return (
          <motion.div key={angle}
            className="absolute w-2.5 h-2.5 rounded-full"
            style={{
              left: 220 + r * Math.cos(rad) - 5,
              top: 220 + r * Math.sin(rad) - 5,
              background: i % 2 === 0 ? 'rgba(56,189,248,0.9)' : 'rgba(249,115,22,0.7)',
              boxShadow: i % 2 === 0 ? '0 0 10px rgba(56,189,248,0.8)' : '0 0 10px rgba(249,115,22,0.8)',
            }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.2 }}
          />
        )
      })}
    </div>
  )
}
