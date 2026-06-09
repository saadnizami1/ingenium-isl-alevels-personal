import { motion } from 'framer-motion'

const tiers = [
  { label: 'Title Sponsor', slots: 1, height: 160 },
  { label: 'Gold Sponsors', slots: 2, height: 110 },
  { label: 'Partners', slots: 3, height: 80 },
]

export default function Sponsors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section style={{
        minHeight: '100vh',
        padding: 'clamp(8rem, 14vw, 12rem) clamp(1.5rem, 5vw, 5rem) clamp(6rem, 10vw, 8rem)',
        maxWidth: 1200,
        margin: '0 auto',
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'clamp(4rem, 8vw, 7rem)' }}
        >
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.65rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1.25rem',
          }}>
            Ingenium 2026
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            lineHeight: 0.95,
            letterSpacing: '0.03em',
            color: 'var(--white)',
          }}>
            SPONSORS
          </h1>
        </motion.div>

        {/* Sponsor tiers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5rem)' }}>
          {tiers.map((tier, ti) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + ti * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.6rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                marginBottom: '1.25rem',
              }}>
                {tier.label}
              </p>

              <div className="resp-sponsors-tier" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${tier.slots}, 1fr)`,
                gap: '1px',
                background: 'rgba(255,255,255,0.06)',
              }}>
                {Array.from({ length: tier.slots }).map((_, si) => (
                  <motion.div
                    key={si}
                    whileHover={{ background: 'rgba(245,166,35,0.04)' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      height: tier.height,
                      background: 'var(--bg-2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.12)',
                    }}>
                      To be announced
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            marginTop: 'clamp(4rem, 8vw, 6rem)',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.62rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.18)',
          }}
        >
          Sponsor announcements coming soon — contact us to get involved
        </motion.p>

      </section>
    </motion.div>
  )
}
