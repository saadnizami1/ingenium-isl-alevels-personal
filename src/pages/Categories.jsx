import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.png'
import { categories } from '../data/categories'

export default function Categories() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader title="CATEGORIES" sub="Ingenium 2026" bg={bg} />

      <section className="resp-section" style={{ padding: '7rem 3rem 4rem', maxWidth: 1300, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ color: 'var(--gray)', fontSize: 'clamp(1rem, 2.2vw, 1.25rem)', lineHeight: 1.85, maxWidth: 720 }}
        >
          The competition comprises fifteen categories. Malpighi’s Manifestation and Eureka are compulsory. Beyond these, each team selects between three and five optional categories. Open any category to view its study guide.
        </motion.p>
      </section>

      <section className="resp-section" style={{ padding: '0 3rem 12rem', maxWidth: 1300, margin: '0 auto' }}>
        <div className="resp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'var(--border)', border: '1px solid var(--border)' }}>
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} index={i} />
          ))}
        </div>
      </section>
    </motion.div>
  )
}

function CategoryCard({ cat, index }) {
  return (
    <Link to={`/categories/${cat.slug}`} style={{ display: 'block' }}>
      <motion.div
        initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: (index % 2) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0, backgroundColor: 'rgba(245,166,35,0)' },
          hover: { backgroundColor: 'rgba(245,166,35,0.04)', transition: { duration: 0.35 } },
        }}
        style={{
          position: 'relative', background: 'var(--bg)', padding: 'clamp(2rem, 3.5vw, 3rem)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%',
        }}
      >
        {/* Header: circular emblem + field / name */}
        <div className="resp-cat-head" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.1rem, 2vw, 1.6rem)', marginBottom: '1.4rem' }}>
          {cat.emblem && (
            <motion.img
              src={cat.emblem}
              alt={`${cat.name} emblem`}
              variants={{ hover: { scale: 1.06 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: 'clamp(84px, 13vw, 112px)', height: 'clamp(84px, 13vw, 112px)',
                flexShrink: 0, objectFit: 'contain',
                filter: 'drop-shadow(0 0 28px rgba(245,166,35,0.28))',
              }}
            />
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.55rem', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.16em',
                color: 'var(--gold)', textTransform: 'uppercase',
              }}>
                {cat.field}
              </span>
              {cat.compulsory && (
                <span style={{
                  fontFamily: 'var(--font-heading)', fontSize: '0.53rem', letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem', border: '1px solid var(--border-gold)',
                }}>
                  Compulsory
                </span>
              )}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              letterSpacing: '0.03em', lineHeight: 1,
            }}>
              {cat.name}
            </h3>
          </div>
        </div>

        <p style={{ color: 'var(--gray)', fontSize: '0.92rem', lineHeight: 1.85 }}>
          {cat.desc}
        </p>

        {/* Footer: study-guide status + affordance */}
        <div style={{
          marginTop: 'auto', paddingTop: '1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: cat.hasGuide ? 'var(--gold)' : 'rgba(255,255,255,0.28)',
              boxShadow: cat.hasGuide ? '0 0 10px var(--gold)' : 'none',
            }} />
            <span style={{
              fontFamily: 'var(--font-heading)', fontSize: '0.58rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
            }}>
              {cat.hasGuide ? 'Study guide available' : 'Study guide coming soon'}
            </span>
          </span>
          <motion.span
            variants={{ hover: { x: 5 } }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'var(--gold)', whiteSpace: 'nowrap',
            }}
          >
            View →
          </motion.span>
        </div>
      </motion.div>
    </Link>
  )
}

function PageHeader({ title, sub, bg: bgSrc }) {
  return (
    <section className="resp-page-header" style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
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
