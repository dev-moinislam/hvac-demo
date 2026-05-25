import { motion } from 'framer-motion'
import { Clock, Shield, Award, Zap, Users, ThumbsUp, CheckCircle } from 'lucide-react'

const features = [
  { icon: Clock, title: '60-Minute Emergency Response', desc: 'Our dispatchers are live 24/7. A tech is at your door within the hour — or the service call is free.', metric: '< 60 min', metricLabel: 'avg response' },
  { icon: Award, title: 'NATE-Certified Technicians', desc: 'Every technician holds NATE certification — the gold standard in the HVAC industry. No generalists.', metric: '100%', metricLabel: 'NATE certified' },
  { icon: Shield, title: 'Full Parts & Labor Warranty', desc: '2-year warranty on all repairs, 10-year on new equipment installations. We stand behind every job.', metric: '2 yr', metricLabel: 'warranty' },
  { icon: Zap, title: 'Energy Efficiency Experts', desc: 'We engineer systems for peak efficiency — helping homeowners save up to 40% on energy bills.', metric: '40%', metricLabel: 'avg savings' },
  { icon: Users, title: 'Locally Owned & Operated', desc: 'Not a franchise. We\'re your neighbors — a family business serving this community for 15 years.', metric: '15 yr', metricLabel: 'in business' },
  { icon: ThumbsUp, title: 'Transparent Flat-Rate Pricing', desc: 'No surprise charges. Written estimate before we touch anything. Final invoice always matches.', metric: '$0', metricLabel: 'hidden fees' },
]

const certifications = ['NATE Certified', 'EPA 608', 'BBB A+', 'ACCA Member', 'AHRI Certified', 'Energy Star Partner']

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-sky-500/20">
            <CheckCircle className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-sm font-semibold">Why Choose ArcticPro</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-grotesk font-bold text-4xl lg:text-5xl text-white leading-tight">
              The Standard Others <span className="gradient-text">Struggle</span> to Match
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We don't just fix HVAC systems — we engineer long-term comfort solutions backed by industry-leading warranties, certified professionals, and a commitment to excellence.
            </p>
          </div>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-sky-500/10 hover:border-sky-400/25 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-6 h-6 text-sky-400" />
                </div>
                <div className="text-right">
                  <div className="font-grotesk font-bold text-sky-300 text-xl">{f.metric}</div>
                  <div className="text-slate-500 text-xs">{f.metricLabel}</div>
                </div>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-8 border border-sky-500/10">
          <p className="text-center text-slate-400 text-xs font-semibold tracking-widest uppercase mb-6">
            Certifications & Memberships
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map(cert => (
              <motion.div key={cert} whileHover={{ scale: 1.05 }}
                className="glass rounded-lg px-5 py-2.5 border border-sky-500/20 hover:border-sky-400/40 transition-colors cursor-default">
                <span className="text-sky-300 font-semibold text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
