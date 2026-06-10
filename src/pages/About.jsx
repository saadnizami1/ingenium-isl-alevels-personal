import { motion } from 'framer-motion'
import bg from '../assets/bg.png'
import logo from '../assets/logo.png'


export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader title="ABOUT US" sub="STEM @ ISL" bg={bg} />

      <section className="resp-section" style={{ padding: '9rem 3rem', maxWidth: 1300, margin: '0 auto' }}>
  <div className="resp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', lineHeight: 0.95, marginBottom: '2.5rem' }}
      >
        EXORIEMUR EX CINERIBUS
      </motion.h2>
      {[
        'The ISL Science Society is International School Lahore\'s centre for scientific ambition, where students compete, build, and push the boundaries of what school-level science looks like in Pakistan. Representing Pakistan in some of the world\'s most demanding student olympiads — the IBO, IOAA and IYPT — the Society has earned its place on the national stage, with victories at the Pakistan Young Physicists\' Tournament nationals and multiple Best Delegation awards at LUMS PSIFI.',
        'At the heart of the Society sits ISL Ingenium, a three-day interschool national STEM competition that brings together Pakistan\'s top student scientists for challenges spanning research, problem-solving, and hands-on application.',
        'The Society also publishes Magnum Opus, a digital magazine that chronicles the Society\'s achievements alongside the latest breakthroughs in Pakistani and global science.',
      ].map((p, i) => (
        <motion.p key={i}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
          style={{ color: 'var(--gray)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1.5rem' }}
        >{p}</motion.p>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <img src={logo} alt="Ingenium Logo" style={{ width: '75%', maxWidth: 320, mixBlendMode: 'screen', filter: 'drop-shadow(0 0 80px rgba(245,166,35,0.4))' }} />
    </motion.div>
  </div>
</section>

      <section className="resp-section" style={{ padding: '2rem 3rem 12rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ borderLeft: '2px solid rgba(245,166,35,0.35)', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', margin: 0 }}
          >
            <p style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '1.5rem',
            }}>
              "I… seem to have been only like a boy playing on the sea-shore… whilst the great ocean of truth lay all undiscovered before me."
            </p>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>
              — Isaac Newton
            </p>
          </motion.blockquote>
        </div>
      </section>
    </motion.div>
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
          style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {sub}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 11vw, 11rem)', lineHeight: 0.88, letterSpacing: '0.02em' }}>
          {title}
        </motion.h1>
      </div>
    </section>
  )
}
