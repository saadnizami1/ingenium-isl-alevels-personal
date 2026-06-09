import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TARGET_DATE = new Date('2026-08-28T00:00:00')

function pad(n) { return String(n).padStart(2, '0') }

function FlipNum({ value }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block', lineHeight: 1 }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'block' }}
        >
          {pad(value)}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 50, hours: 2, minutes: 10, seconds: 6 })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE - Date.now()
      if (diff <= 0) {
        setIsOpen(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: timeLeft.days,    label: 'Days'    },
    { value: timeLeft.hours,   label: 'Hours'   },
    { value: timeLeft.minutes, label: 'Min'     },
    { value: timeLeft.seconds, label: 'Sec'     },
  ]

  return (
    <section className="resp-countdown" style={{
      padding: '1rem 2rem clamp(4rem, 6vw, 6rem)',
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #0d000b 0%, #080006 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 6vw, 5rem)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: '2rem',
          lineHeight: 1,
        }}
      >
        {isOpen ? 'Event Has Started' : 'Ingenium Starts In'}
      </motion.h2>

      {/* Numbers row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.9 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 0,
        }}
      >
        {units.map(({ value, label }, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div className="resp-countdown-unit" style={{ textAlign: 'center', padding: '0 clamp(0.6rem, 2vw, 1.8rem)' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                lineHeight: 1,
                color: '#ffffff',
                letterSpacing: '0.02em',
              }}>
                <FlipNum value={value} />
              </div>
              <p style={{
                marginTop: '0.65rem',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(0.5rem, 0.9vw, 0.62rem)',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}>
                {label}
              </p>
            </div>

            {i < units.length - 1 && (
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.15)',
                paddingTop: '0.05em',
                userSelect: 'none',
              }}>
                :
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Thin rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: 'clamp(120px, 30vw, 240px)',
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)',
          margin: '3rem auto 2.5rem',
          transformOrigin: 'center',
        }}
      />

      {/* Register link */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'inline-block', position: 'relative' }}
      >
        <a
          href="https://form.typeform.com/to/zxN5VbZa"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'var(--white)',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.7rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            padding: '1.1rem 2.2rem',
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'border-color 0.3s, color 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,166,35,0.6)'; e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'var(--white)' }}
        >
          Register Now
          <span style={{ fontSize: '0.85rem', letterSpacing: 0 }}>→</span>
        </a>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              marginTop: '3rem',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '0.1em',
              color: '#ffffff',
            }}
          >
            REGISTER NOW
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  )
}
