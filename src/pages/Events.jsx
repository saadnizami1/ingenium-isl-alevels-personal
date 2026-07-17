import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/bg.png'

// Auto-loads every image dropped into src/assets/register/ — no code changes needed
const slideModules = import.meta.glob('../assets/register/*.{png,jpg,jpeg,webp,gif,PNG,JPG,JPEG,WEBP}', { eager: true })
const slides = Object.keys(slideModules).sort().map((k) => slideModules[k].default)

const event = {
  name: 'INGENIUM',
  date: '28-30 August 2026',
  desc: 'ISL\'s flagship science event. 10+ competition categories, 30+ schools, and delegates from across the country — sponsored by Pakistan\'s largest organizations and run and mentored by some of Pakistan\'s most distinguished STEM personalities.',
  registerUrl: 'https://form.typeform.com/to/zxN5VbZa',
}

export default function Events() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader title="REGISTER" sub="Ingenium 2026" bg={bg} />

      <section className="resp-section resp-events-section" style={{ padding: '6rem 3rem 12rem', maxWidth: 1300, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(2rem, 4vw, 4rem)', background: 'var(--bg-2)', position: 'relative', overflow: 'hidden' }}
        >
          {/* Faint watermark */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
            paddingRight: '2rem', overflow: 'hidden', pointerEvents: 'none', userSelect: 'none',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 14vw, 13rem)',
              letterSpacing: '0.02em', color: 'rgba(245,166,35,0.05)',
              lineHeight: 1, whiteSpace: 'nowrap',
            }}>INGENIUM</span>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '1.05rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.01em' }}>
                Registrations Open
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{event.date}</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 9rem)',
              letterSpacing: '0.04em', lineHeight: 0.9,
              marginBottom: '2rem', color: 'var(--white)',
            }}>{event.name}</h2>

            <p style={{ color: 'var(--gray)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.8, maxWidth: 600, marginBottom: '2.5rem' }}>{event.desc}</p>

            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'var(--gold)',
                color: '#080006',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Register Now →
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}

function PageHeader({ title, sub, bg: bgSrc }) {
  return (
    <section style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <HeaderSlideshow images={slides.length ? slides : [bgSrc]} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,0,6,0.25) 0%, rgba(8,0,6,0.35) 55%, var(--bg) 100%)' }} />
      </div>
      <div className="resp-pad" style={{ position: 'relative', zIndex: 1, padding: '0 3rem 4rem', maxWidth: 1300, width: '100%', margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>{sub}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 11vw, 11rem)', lineHeight: 0.88, letterSpacing: '0.02em' }}>{title}</motion.h1>
      </div>
    </section>
  )
}

function HeaderSlideshow({ images }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          initial={false}
          animate={{
            opacity: i === index ? 0.7 : 0,
            scale: i === index ? 1.08 : 1,
          }}
          transition={{
            opacity: { duration: 1.4, ease: 'easeInOut' },
            scale: { duration: 6, ease: 'linear' },
          }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ))}
    </div>
  )
}
