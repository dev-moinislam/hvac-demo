import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', urgency: 'standard' })

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,#0ea5e9 0%,transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-sky-500/20">
            <Mail className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-sm font-semibold">Get in Touch</span>
          </div>
          <h2 className="font-grotesk font-bold text-4xl lg:text-5xl text-white mb-4">
            Start With a <span className="gradient-text">Free Estimate</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tell us about your project. We'll respond within 30 minutes during business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: 'Call or Text', content: '(800) 555-1234', sub: 'Available 24/7 for emergencies', href: 'tel:+18005551234' },
              { icon: Mail, title: 'Email Us', content: 'hello@arcticpro.com', sub: 'We reply within 30 minutes', href: 'mailto:hello@arcticpro.com' },
              { icon: MapPin, title: 'Service Area', content: 'Riverside County, CA', sub: '50-mile service radius', href: '#areas' },
              { icon: Clock, title: 'Business Hours', content: 'Mon–Sat: 7AM–8PM', sub: 'Emergency: 24/7/365', href: null },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-5 border border-sky-500/10 hover:border-sky-400/25 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/25 transition-colors">
                    <item.icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-medium mb-1">{item.title}</div>
                    {item.href
                      ? <a href={item.href} className="text-white font-semibold hover:text-sky-300 transition-colors text-sm">{item.content}</a>
                      : <div className="text-white font-semibold text-sm">{item.content}</div>}
                    <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-3">
            <div className="glass-strong rounded-3xl p-8 border border-sky-500/15">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-6"
                    style={{ boxShadow: '0 0 40px rgba(34,197,94,0.3)' }}>
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="font-grotesk font-bold text-2xl text-white mb-3">Request Received!</h3>
                  <p className="text-slate-400">We'll reach out within 30 minutes to confirm your appointment.</p>
                </motion.div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-slate-400 text-sm font-medium mb-2 block">Full Name *</label>
                      <input required type="text" placeholder="John Smith"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/[0.04] border border-sky-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400/60 focus:bg-sky-500/[0.05] transition-all" />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm font-medium mb-2 block">Phone Number *</label>
                      <input required type="tel" placeholder="(555) 123-4567"
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/[0.04] border border-sky-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400/60 transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-sm font-medium mb-2 block">Email Address</label>
                    <input type="email" placeholder="john@example.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/[0.04] border border-sky-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400/60 transition-all" />
                  </div>

                  <div>
                    <label className="text-slate-400 text-sm font-medium mb-2 block">Service Needed *</label>
                    <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#040f1e] border border-sky-500/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400/60 transition-all">
                      <option value="">Select a service...</option>
                      <option>AC Repair</option>
                      <option>Heating Repair</option>
                      <option>Furnace Installation</option>
                      <option>HVAC Maintenance</option>
                      <option>Air Quality Solutions</option>
                      <option>Emergency HVAC Service</option>
                      <option>New System Installation</option>
                    </select>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="text-slate-400 text-sm font-medium mb-2 block">Urgency Level</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { val: 'emergency', label: '🚨 Emergency', desc: 'Today' },
                        { val: 'urgent', label: '⚡ Urgent', desc: 'This week' },
                        { val: 'standard', label: '📅 Standard', desc: 'Flexible' },
                      ].map(opt => (
                        <button key={opt.val} type="button"
                          onClick={() => setForm({ ...form, urgency: opt.val })}
                          className={`p-3 rounded-xl border text-center text-xs transition-all ${
                            form.urgency === opt.val
                              ? 'border-sky-400/60 bg-sky-500/10 text-sky-300'
                              : 'border-sky-500/15 text-slate-400 hover:border-sky-500/30'
                          }`}>
                          <div className="font-semibold">{opt.label}</div>
                          <div className="opacity-70 mt-0.5">{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-sm font-medium mb-2 block">Tell Us More</label>
                    <textarea rows={3} placeholder="Describe your HVAC issue or project..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/[0.04] border border-sky-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400/60 transition-all resize-none" />
                  </div>

                  <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full py-4 text-base">
                    <Send className="w-5 h-5" />
                    Send My Free Estimate Request
                  </motion.button>
                  <p className="text-slate-600 text-xs text-center">No spam. No obligation. Response within 30 minutes.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
