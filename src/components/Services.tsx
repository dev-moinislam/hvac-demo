import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Wind, Flame, Wrench, Settings, Leaf, AlertTriangle, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'AC Repair & Service',
    desc: 'Fast, precise air conditioning repair for all makes and models. Stay cool when it matters most.',
    features: ['Same-day service', 'All brands', 'Warranty included'],
    color: 'from-sky-500 to-cyan-400',
    glow: 'rgba(14,165,233,0.3)',
    badge: 'Most Popular',
  },
  {
    icon: Flame,
    title: 'Heating Repair',
    desc: 'Expert heating system diagnostics and repair. We restore warmth to your home — fast.',
    features: ['24/7 emergency', 'Gas & electric', 'Safety certified'],
    color: 'from-orange-500 to-amber-400',
    glow: 'rgba(249,115,22,0.3)',
    badge: null,
  },
  {
    icon: Settings,
    title: 'Furnace Installation',
    desc: 'High-efficiency furnace installs with precision calibration for optimal performance.',
    features: ['Energy efficient', 'Rebates available', 'Lifetime support'],
    color: 'from-violet-500 to-purple-400',
    glow: 'rgba(139,92,246,0.3)',
    badge: null,
  },
  {
    icon: Wrench,
    title: 'HVAC Maintenance',
    desc: 'Preventative tune-ups that extend system life and slash energy bills by up to 30%.',
    features: ['Annual plans', 'Priority service', 'Full inspection'],
    color: 'from-green-500 to-emerald-400',
    glow: 'rgba(34,197,94,0.3)',
    badge: 'Best Value',
  },
  {
    icon: Leaf,
    title: 'Air Quality Solutions',
    desc: 'Breathe cleaner air with advanced filtration, UV purifiers, and humidity control.',
    features: ['HEPA filters', 'UV purification', 'Smart sensors'],
    color: 'from-teal-500 to-cyan-400',
    glow: 'rgba(20,184,166,0.3)',
    badge: null,
  },
  {
    icon: AlertTriangle,
    title: 'Emergency HVAC',
    desc: 'True 24/7 emergency response. Technicians dispatched within 60 minutes — guaranteed.',
    features: ['60-min response', '365 days/year', 'No extra charge'],
    color: 'from-red-500 to-rose-400',
    glow: 'rgba(239,68,68,0.3)',
    badge: '24/7',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18
    setTilt({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      style={{
        transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: hovered ? 'transform 0.08s ease' : 'transform 0.4s ease',
      }}
      className="relative h-full"
    >
      <div
        className="glass rounded-2xl p-7 border border-sky-500/10 h-full flex flex-col cursor-default transition-all duration-300"
        style={{
          boxShadow: hovered ? `0 20px 50px ${service.glow}, 0 0 0 1px ${service.glow}` : 'none',
        }}
      >
        {service.badge && (
          <div className="absolute -top-3 right-6 z-10">
            <div className={`bg-gradient-to-r ${service.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
              {service.badge}
            </div>
          </div>
        )}

        <div className="mb-5">
          <div
            className={`inline-flex w-14 h-14 rounded-2xl items-center justify-center bg-gradient-to-br ${service.color} transition-transform duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}
            style={{ boxShadow: `0 8px 24px ${service.glow}` }}
          >
            <service.icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <h3 className="font-grotesk font-bold text-xl text-white mb-3">{service.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>

        <ul className="space-y-2 mb-6">
          {service.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${service.color}`} />
              {f}
            </li>
          ))}
        </ul>

        <a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group/lnk">
          Learn more
          <ArrowRight className="w-4 h-4 group-hover/lnk:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(14,165,233,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-sky-500/20">
            <Settings className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="font-grotesk font-bold text-4xl lg:text-5xl text-white mb-4">
            Complete HVAC <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every service delivered with precision, speed, and the craftsmanship that's made us the region's most trusted name in climate control.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
