import { motion } from 'framer-motion'
import { CreditCard, DollarSign, Percent, CheckCircle } from 'lucide-react'

const plans = [
  {
    name: 'HVAC Saver',
    tagline: 'For qualifying repairs',
    rate: '0% APR',
    period: '12 months',
    minAmount: '$500 min',
    features: ['No interest if paid in full', 'Quick online application', 'Same-day approval', 'Any repair or maintenance'],
    color: 'from-sky-600 to-cyan-500',
    glow: 'rgba(14,165,233,0.2)',
    popular: false,
  },
  {
    name: 'ProComfort Plan',
    tagline: 'Most popular for installs',
    rate: '0% APR',
    period: '24 months',
    minAmount: '$2,000 min',
    features: ['Zero down payment', '24 months interest-free', 'New system installations', 'Includes labor & parts'],
    color: 'from-violet-600 to-purple-500',
    glow: 'rgba(139,92,246,0.2)',
    popular: true,
  },
  {
    name: 'Elite Finance',
    tagline: 'Maximum flexibility',
    rate: '7.99% APR',
    period: '60 months',
    minAmount: '$1,000 min',
    features: ['Up to 60 months', 'Low monthly payments', 'Any HVAC project', 'Flexible terms'],
    color: 'from-emerald-600 to-teal-500',
    glow: 'rgba(16,185,129,0.2)',
    popular: false,
  },
]

export default function Financing() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-sky-500/20">
            <CreditCard className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-sm font-semibold">Financing Options</span>
          </div>
          <h2 className="font-grotesk font-bold text-4xl lg:text-5xl text-white mb-4">
            Comfort Shouldn't <span className="gradient-text">Break the Bank</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Flexible financing makes it easy to get the system you need today and pay on your terms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center z-10">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div
                className={`glass rounded-2xl p-7 border h-full flex flex-col transition-all duration-300 ${plan.popular ? 'border-violet-400/30' : 'border-sky-500/10'}`}
                style={{ boxShadow: plan.popular ? `0 20px 60px ${plan.glow}` : 'none' }}
              >
                <div className="mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}
                    style={{ boxShadow: `0 8px 24px ${plan.glow}` }}>
                    <Percent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-grotesk font-bold text-xl text-white mb-1">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.tagline}</p>
                </div>

                <div className="mb-5 pb-5 border-b border-sky-500/10">
                  <div className={`font-grotesk font-bold text-3xl bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>
                    {plan.rate}
                  </div>
                  <div className="text-slate-400 text-sm">for {plan.period} · {plan.minAmount}</div>
                </div>

                <ul className="space-y-3 mb-7 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact"
                  className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:opacity-90`
                      : 'btn-secondary'
                  }`}
                  style={plan.popular ? { boxShadow: `0 8px 24px ${plan.glow}` } : {}}>
                  Apply Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
          {[
            { icon: DollarSign, text: 'No prepayment penalty' },
            { icon: CheckCircle, text: 'Soft credit pull' },
            { icon: CreditCard, text: 'OAC — See rep for details' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-green-400" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
