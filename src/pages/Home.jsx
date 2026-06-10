import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import bg from '../assets/bg.png'
import logo from '../assets/logo.png'
import CountdownSection from '../components/CountdownSection'

const letters = 'INGENIUM'.split('')

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>

      {/* ─── HERO ─── */}
      <section ref={heroRef} style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <motion.div style={{ y: bgY, position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={bg} alt="" style={{ width: '100%', height: '120%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,0,6,0.3) 0%, rgba(8,0,6,0.05) 40%, rgba(8,0,6,0.9) 100%)' }} />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem', marginTop: '6rem' }}>
          <motion.img
            src={logo} alt=""
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: 'min(320px, 52vw)', margin: '0 auto 2rem', display: 'block', mixBlendMode: 'screen', filter: 'drop-shadow(0 0 40px rgba(245,166,35,0.5))' }}
          />

          <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 7vw, 7rem)',
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                  color: 'var(--gold-light)',
                }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
              letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)',
              marginTop: '1.25rem',
            }}
          >
            ISL Science Society
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="resp-hero-buttons"
            style={{ marginTop: '3.5rem', display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/events" style={{
              padding: '1rem 2.75rem',
              background: 'var(--gold)', color: '#080006',
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            }}>
              Register Now
            </Link>
            <Link to="/about" style={{
              padding: '1rem 2.75rem',
              border: '1px solid rgba(245,166,35,0.35)', color: 'var(--white)',
              fontFamily: 'var(--font-heading)', fontWeight: 600,
              fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>
              About Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── TAGLINE ─── */}
      <section className="resp-section resp-tagline" style={{ padding: '10rem 3rem', maxWidth: 1300, margin: '0 auto' }}>
        <motion.span
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.72rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          Who We Are
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '0.02em', maxWidth: 860, color: 'rgba(255,255,255,0.85)' }}
        >
         The ISL Science Society represents Pakistan at international science olympiads and hosts Ingenium, one of the country’s largest student STEM competitions.
        </motion.h2>
        <div className="resp-tagline-right" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ maxWidth: 480 }}
          >
            <p style={{ color: 'var(--gray)', fontSize: '1rem', lineHeight: 1.9, marginBottom: '2rem' }}>
              From olympiads to Ingenium, explore what we've built.
            </p>
            <Link to="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: '1rem',
              fontFamily: 'var(--font-heading)', fontSize: '0.72rem',
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)',
            }}>
              Our Story
              <motion.span
                style={{ display: 'block', height: 1, background: 'var(--gold)', originX: 0 }}
                initial={{ width: 30 }}
                whileHover={{ width: 60 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CARDS ─── */}
      <section className="resp-section" style={{ padding: '4rem 3rem 12rem', background: 'linear-gradient(to bottom, var(--bg), #0d000b)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5px', background: 'var(--border)' }}>
          {[
            { num: '01', title: 'Events', sub: 'Competitions, talks & workshops', path: '/events' },
            { num: '02', title: 'Science Ec', sub: 'The Executive Council', path: '/science-ec' },
            { num: '03', title: 'Newsletter', sub: 'The science pulse of ISL', path: '/newsletter' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              style={{ padding: '3.5rem', background: 'var(--bg-2)', position: 'relative', overflow: 'hidden', transition: 'background 0.3s' }}
            >
              <span style={{
                position: 'absolute', top: '1rem', right: '1.5rem',
                fontFamily: 'var(--font-display)', fontSize: '7rem',
                color: 'rgba(245,166,35,0.04)', lineHeight: 1, pointerEvents: 'none',
              }}>{item.num}</span>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                {item.sub}
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '2.5rem' }}>
                {item.title}
              </h3>
              <Link to={item.path} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                fontFamily: 'var(--font-heading)', fontSize: '0.65rem',
                letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
              }}>
                Explore <span style={{ width: 28, height: 1, background: 'currentColor', display: 'block' }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── COUNTDOWN ─── */}
      <CountdownSection />

    </motion.div>
  )
}
