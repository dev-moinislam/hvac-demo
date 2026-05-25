import { motion } from 'framer-motion'

const brands = [
  'Carrier', 'Trane', 'Lennox', 'Rheem', 'York', 'Daikin', 'Bryant', 'Goodman',
]

export default function TrustedBrands() {
  return (
    <section className="py-14 border-y border-sky-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-slate-500 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          Authorized Dealer & Certified Installer
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg,#020b18,transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(-90deg,#020b18,transparent)' }} />

          <motion.div
            className="flex gap-10 items-center w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0 group cursor-default">
                <div className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-sky-500/20 group-hover:border-sky-400/40 transition-colors">
                  <span className="text-sky-400 font-grotesk font-bold text-xs">{brand.slice(0, 2).toUpperCase()}</span>
                </div>
                <span className="text-slate-400 font-semibold text-base group-hover:text-slate-200 transition-colors whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
