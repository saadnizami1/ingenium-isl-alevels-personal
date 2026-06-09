import { motion } from 'framer-motion'
import bg from '../assets/bg.png'

const presidents = [
  { num: '01', name: 'Nasik', role: 'Science President' },
  { num: '02', name: 'Hassan Atif', role: 'Science President' },
  { num: '03', name: 'Manal Najaf', role: 'Science President' },
]

export default function ScienceEc() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader title="SCIENCE EC" sub="Executive Council" bg={bg} desc="People running the show." />

      <section className="resp-section" style={{ padding: '8rem 3rem 12rem', maxWidth: 1300, margin: '0 auto' }}>
        <div className="resp-grid-500" style={{ display: 'grid', gap: '1.5px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', background: 'var(--border)' }}>
          {presidents.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ background: 'rgba(245,166,35,0.03)' }}
              style={{ padding: '3.5rem', background: 'var(--bg)', position: 'relative', overflow: 'hidden', transition: 'background 0.3s' }}
            >
              <span style={{ position: 'absolute', top: '0.5rem', right: '1.5rem', fontFamily: 'var(--font-display)', fontSize: '7rem', color: 'rgba(245,166,35,0.04)', lineHeight: 1, pointerEvents: 'none' }}>{p.num}</span>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{p.role}</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.04em', lineHeight: 1 }}>{p.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

function PageHeader({ title, sub, bg: bgSrc, desc }) {
  return (
    <section style={{ position: 'relative', height: '65vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={bgSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,0,6,0.5) 0%, var(--bg) 100%)' }} />
      </div>
      <div className="resp-pad" style={{ position: 'relative', zIndex: 1, padding: '0 3rem 4rem', maxWidth: 1300, width: '100%', margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>{sub}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 9vw, 9rem)', lineHeight: 0.88, letterSpacing: '0.02em', marginBottom: desc ? '1.5rem' : 0 }}>{title}</motion.h1>
        {desc && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ color: 'var(--gray)', maxWidth: 520, lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</motion.p>}
      </div>
    </section>
  )
}
