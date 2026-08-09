import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { getCategory, getNeighbors } from '../data/categories'
import bg from '../assets/bg.png'

export default function CategoryGuide() {
  const { slug } = useParams()
  const cat = getCategory(slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!cat) return <NotFound />

  const { prev, next } = getNeighbors(slug)

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh' }}
    >
      {/* Sticky sub-toolbar (sits under the fixed navbar) */}
      <div className="resp-guide-toolbar" style={{
        position: 'sticky', top: 80, zIndex: 900,
        background: 'rgba(8,0,6,0.9)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.75rem clamp(1.25rem, 5vw, 4rem)', gap: '1rem',
      }}>
        <Link to="/categories" style={{
          fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap',
        }}>
          ← All Categories
        </Link>
        <span className="resp-guide-toolbar-title" style={{
          fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--gold)', whiteSpace: 'nowrap',
          overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {cat.field} · Study Guide
        </span>
      </div>

      {/* ─── Hero ─── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(4rem, 9vw, 8rem) 1.5rem clamp(3rem, 6vw, 5rem)' }}>
        <img src={bg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.16 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 80% at 50% 0%, rgba(245,166,35,0.10) 0%, transparent 55%), linear-gradient(to bottom, rgba(8,0,6,0.6), var(--bg))' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          {cat.emblem && (
            <motion.img
              src={cat.emblem}
              alt={`${cat.name} emblem`}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: 'clamp(120px, 22vw, 180px)', height: 'clamp(120px, 22vw, 180px)',
                objectFit: 'contain', margin: '0 auto 1.75rem',
                filter: 'drop-shadow(0 0 48px rgba(245,166,35,0.4))',
              }}
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}
          >
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.64rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {cat.field}
            </span>
            {cat.compulsory && (
              <span style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.55rem', letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
                padding: '0.22rem 0.65rem', border: '1px solid var(--border-gold)',
              }}>Compulsory</span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '0.02em', marginBottom: '1.75rem' }}
          >
            {cat.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            style={{ color: 'var(--gray)', fontSize: 'clamp(0.95rem, 2vw, 1.08rem)', lineHeight: 1.85, maxWidth: 680, margin: '0 auto' }}
          >
            {cat.desc}
          </motion.p>
        </div>
      </section>

      {/* ─── Study guide body ─── */}
      <section className="resp-section" style={{ padding: '2rem 1.5rem 6rem', maxWidth: 1000, margin: '0 auto' }}>
        <SectionLabel>Study Guide</SectionLabel>
        {cat.guide ? <GuideViewer cat={cat} /> : <ComingSoon cat={cat} />}
      </section>

      {/* ─── Prev / Next ─── */}
      <section className="resp-section" style={{ padding: '0 1.5rem 8rem', maxWidth: 1000, margin: '0 auto' }}>
        <div className="resp-guide-nav" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'var(--border)', border: '1px solid var(--border)' }}>
          <NeighborLink cat={prev} dir="prev" />
          <NeighborLink cat={next} dir="next" />
        </div>
      </section>
    </motion.div>
  )
}

// ─── Pieces ──────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.66rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold)', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, var(--border-gold), transparent)' }} />
    </div>
  )
}

function GuideViewer({ cat }) {
  const fileName = `${cat.slug}-study-guide.pdf`
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Action bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <a href={cat.guide} target="_blank" rel="noopener noreferrer" style={ghostBtn}>Open in new tab ↗</a>
        <a href={cat.guide} download={fileName} style={goldBtn}>Download PDF ↓</a>
      </div>

      {/* Embedded viewer */}
      <div style={{
        position: 'relative', border: '1px solid var(--border-gold)', borderRadius: 8, overflow: 'hidden',
        background: '#0d000b', boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      }}>
        <object data={`${cat.guide}#view=FitH`} type="application/pdf" className="resp-guide-pdf" style={{ width: '100%', height: '82vh', display: 'block' }}>
          <iframe src={`${cat.guide}#view=FitH`} title={`${cat.name} study guide`} className="resp-guide-pdf" style={{ width: '100%', height: '82vh', border: 'none', display: 'block' }} />
          <div style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--gray)', marginBottom: '1.25rem' }}>Your browser can’t display the PDF inline.</p>
            <a href={cat.guide} target="_blank" rel="noopener noreferrer" style={goldBtn}>Open the study guide ↗</a>
          </div>
        </object>
      </div>
    </motion.div>
  )
}

function ComingSoon({ cat }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: 10,
        border: '1px solid var(--border-gold)',
        background: 'radial-gradient(120% 140% at 50% 0%, rgba(245,166,35,0.08) 0%, transparent 60%), var(--bg-2)',
        padding: 'clamp(3rem, 8vw, 6rem) 1.5rem', textAlign: 'center',
      }}
    >
      {/* Giant faint emblem watermark */}
      {cat.emblem && (
        <img src={cat.emblem} alt="" aria-hidden style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 'min(120%, 640px)', opacity: 0.05, pointerEvents: 'none', userSelect: 'none',
        }} />
      )}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto' }}>
        {/* Pulsing status dot */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem', padding: '0.4rem 0.9rem', border: '1px solid var(--border-gold)', borderRadius: 999 }}>
          <motion.span
            animate={{ opacity: [1, 0.25, 1], scale: [1, 0.85, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 12px var(--gold)' }}
          />
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            In Preparation
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 6vw, 4rem)', lineHeight: 0.95, letterSpacing: '0.03em', marginBottom: '1.25rem' }}>
          Study Guide Coming Soon
        </h2>
        <p style={{ color: 'var(--gray)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
          We’re putting the finishing touches on the {cat.name} study guide. Once it’s ready,
          it’ll appear right here — check back soon.
        </p>

        {/* Indeterminate shimmer bar */}
        <div style={{ position: 'relative', height: 3, width: 'min(100%, 320px)', margin: '0 auto', background: 'rgba(255,255,255,0.06)', borderRadius: 999, overflow: 'hidden' }}>
          <motion.div
            animate={{ x: ['-100%', '260%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: 0, bottom: 0, width: '40%', background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function NeighborLink({ cat, dir }) {
  if (!cat) return <div style={{ background: 'var(--bg)' }} />
  const isNext = dir === 'next'
  return (
    <Link to={`/categories/${cat.slug}`} style={{ display: 'block' }}>
      <motion.div
        whileHover={{ backgroundColor: 'rgba(245,166,35,0.04)' }}
        style={{
          background: 'var(--bg)', padding: 'clamp(1.5rem, 3vw, 2.25rem)',
          display: 'flex', alignItems: 'center', gap: '1.1rem',
          flexDirection: isNext ? 'row-reverse' : 'row',
          textAlign: isNext ? 'right' : 'left',
        }}
      >
        {cat.emblem && (
          <img src={cat.emblem} alt="" style={{ width: 56, height: 56, flexShrink: 0, objectFit: 'contain', filter: 'drop-shadow(0 0 16px rgba(245,166,35,0.25))' }} />
        )}
        <div style={{ minWidth: 0 }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.4rem' }}>
            {isNext ? 'Next →' : '← Previous'}
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.4vw, 1.6rem)', letterSpacing: '0.03em', lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {cat.name}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}
    >
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 0.9 }}>Category Not Found</h1>
      <p style={{ color: 'var(--gray)', maxWidth: 420, lineHeight: 1.7 }}>We couldn’t find that category. It may have been moved or renamed.</p>
      <Link to="/categories" style={goldBtn}>← Back to Categories</Link>
    </motion.div>
  )
}

// ─── Shared button styles ────────────────────────────────────────────────────

const goldBtn = {
  display: 'inline-block', padding: '0.85rem 1.6rem', background: 'var(--gold)', color: '#080006',
  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.16em',
  textTransform: 'uppercase', textDecoration: 'none', borderRadius: 4,
}
const ghostBtn = {
  display: 'inline-block', padding: '0.85rem 1.6rem', background: 'transparent', color: 'rgba(255,255,255,0.75)',
  border: '1px solid var(--border-gold)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.66rem',
  letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 4,
}
