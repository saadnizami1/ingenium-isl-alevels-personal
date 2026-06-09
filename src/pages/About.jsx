import { motion } from 'framer-motion'
import bg from '../assets/bg.png'
import logo from '../assets/logo.png'

const values = [
  { title: 'Curiosity', desc: '"The important thing is not to stop questioning." ~ Einstein' },
  { title: 'Innovation', desc: '"If it works, it\'s obsolete."    ~ Marshall McLuhan' },
  { title: 'Community', desc: '"No man is an island." ~ John Donne' },
  { title: 'Excellence', desc: '"Good is the enemy of great." ~ Voltaire' },
]

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
              CURIOUS BY NATURE

            </motion.h2>
            {[
              'Some school clubs meet once a week and call it a day. ISL Science Society competes on the world stage. We compete at the IBO, IOAA, IYPT, IYBT, and USACO, and we\'ve got the results to show for it: national victories at the Pakistan Young Physicists\' Tournament and multiple Best Delegation awards at LUMS PSIFI.',
              'Once a year, the Science, Math, CS, Robotics, and Astronomy societies come together to run ISL Ingenium: a three-day interschool STEM competition that brings together the strongest student scientists in the country. Research challenges, rigorous problem-solving, hands-on work. It\'s grown into one of the most respected events on Pakistan\'s national STEM calendar.',
              'We also publish Magnum Opus, a digital magazine covering the Society\'s work and the broader world of science, both in Pakistan and globally. Think less school newsletter, more actual journalism.',
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

      <section className="resp-section" style={{ padding: '6rem 3rem 12rem' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4rem' }}
          >
            Our Values
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5px', background: 'var(--border)' }}>
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ background: 'rgba(245,166,35,0.04)' }}
                style={{ padding: '3.5rem 3rem', background: 'var(--bg)', transition: 'background 0.3s' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--gray)', lineHeight: 1.7, fontSize: '0.9rem' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
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
