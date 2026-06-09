import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.png'

const issues = [
  { title: 'The Quantum Leap', date: 'Feb 2026', topics: ['Quantum Computing', 'Wave-Particle Duality', 'Physics'], path: '/newsletter/quantum-leap' },
  { title: 'The Cognitive Ledger', date: 'Feb 2026', topics: ['AI & Language', 'Cognitive Science', 'Machine Learning'], path: '/newsletter/cognitive-chronicle' },
  { title: 'The Mathematical Chronicle', date: 'Jan 2026', topics: ['Set Theory', 'Infinity', 'Georg Cantor'], path: '/newsletter/mathematical-chronicle' },
  { title: 'Code of Life', date: 'Dec 2025', topics: ['CRISPR', 'Gene Editing', 'Bioethics'], path: '/newsletter/code-of-life' },
  { title: 'The Compute Dispatch', date: 'Dec 2025', topics: ['AI Infrastructure', 'Data Centers', 'Energy'], path: '/newsletter/compute-dispatch' },
]

export default function Newsletter() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader title="NEWSLETTER" sub="Stay Informed" bg={bg} />

      <section className="resp-section" style={{ padding: '8rem 3rem', maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--border)' }}>
          {issues.map((issue, i) => {
            const inner = (
              <motion.div key={issue.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ paddingLeft: '4rem', background: 'rgba(245,166,35,0.03)' }}
                className="resp-newsletter-row"
                style={{ padding: '3rem', background: 'var(--bg)', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '3rem', transition: 'all 0.3s ease', cursor: issue.path ? 'pointer' : 'default' }}
              >
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{issue.date}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 3rem)', letterSpacing: '0.04em', marginBottom: '0.9rem' }}>{issue.title}</h3>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {issue.topics.map(t => (
                      <span key={t} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', padding: '0.2rem 0.7rem', border: '1px solid var(--border)', textTransform: 'uppercase' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <span className="resp-newsletter-read" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.15em', color: issue.path ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.15)', textTransform: 'uppercase' }}>
                  {issue.path ? 'Read →' : 'Coming Soon'}
                </span>
              </motion.div>
            )
            return issue.path
              ? <Link key={issue.title} to={issue.path} style={{ display: 'block' }}>{inner}</Link>
              : <div key={issue.title}>{inner}</div>
          })}
        </div>

        {/* Subscribe */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="resp-subscribe"
          style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', padding: '4rem', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '0.04em', marginBottom: '1rem' }}>NEVER MISS AN ISSUE</h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, fontSize: '0.9rem' }}>Monthly. Free. Straight to your inbox.</p>
          </div>
          <SubscribeForm />
        </motion.div>
      </section>
    </motion.div>
  )
}

function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit() {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!valid) { setError('Please enter a valid email address.'); return }
    setError('')
    setDone(true)
  }

  return (
    <div className="resp-subscribe-form" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <AnimatePresence mode="wait">
        {done ? (
          <motion.p key="done"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.55)' }}
          >
            You're subscribed. See you next issue.
          </motion.p>
        ) : (
          <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setError('') }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                style={{
                  flex: 1, padding: '1rem 1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${error ? 'rgba(255,80,80,0.5)' : 'var(--border)'}`,
                  borderRight: 'none', color: 'var(--white)',
                  fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none',
                }}
              />
              <button onClick={handleSubmit} style={{
                padding: '1rem 2rem', background: 'var(--gold)', border: 'none',
                color: '#080006', fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                whiteSpace: 'nowrap', cursor: 'pointer',
              }}>
                Subscribe
              </button>
            </div>
            {error && (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,100,100,0.7)' }}>{error}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function PageHeader({ title, sub, bg: bgSrc }) {
  return (
    <section style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={bgSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,0,6,0.5) 0%, var(--bg) 100%)' }} />
      </div>
      <div className="resp-pad" style={{ position: 'relative', zIndex: 1, padding: '0 3rem 4rem', maxWidth: 1300, width: '100%', margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>{sub}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 9vw, 9rem)', lineHeight: 0.88, letterSpacing: '0.02em' }}>{title}</motion.h1>
      </div>
    </section>
  )
}
