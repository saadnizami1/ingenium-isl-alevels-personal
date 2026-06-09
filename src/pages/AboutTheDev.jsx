import { motion } from 'framer-motion'

const links = [
  { label: 'Email', value: 'saadnizami@icloud.com', href: 'mailto:saadnizami@icloud.com' },
  { label: 'GitHub', value: 'github.com/saadnizami1', href: 'https://github.com/saadnizami1' },
]

export default function AboutTheDev() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(8rem, 14vw, 13rem) 3rem clamp(5rem, 8vw, 7rem)', maxWidth: 1300, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          The Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 11vw, 10rem)', lineHeight: 0.88, letterSpacing: '0.02em', marginBottom: '3rem' }}
        >
          Saad<br />Nizami
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: 1, background: 'var(--border)', transformOrigin: 'left', marginBottom: '3rem' }}
        />

        <div className="resp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }}
          >
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Role</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Deputy President of Computer Science<br />ISL Ring Road</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.7 }}
          >
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>At Ingenium</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>CS Category Host<br />August 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: '0 3rem clamp(5rem, 8vw, 8rem)', maxWidth: 1300, margin: '0 auto' }}>
        <div className="resp-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', paddingTop: '0.3rem' }}
          >
            About
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}
          >
            I built the Ingenium website and I'll be hosting the Computer Science category at Ingenium 2026. If you want to connect, collaborate on something, or just say hi, feel free to reach out.
          </motion.p>
        </div>
      </section>

      {/* Links */}
      <section style={{ maxWidth: 1300, margin: '0 auto', padding: '0 3rem clamp(8rem, 12vw, 10rem)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--border)' }}>
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ paddingLeft: '4rem', background: 'rgba(245,166,35,0.03)' }}
              style={{
                display: 'grid', gridTemplateColumns: '1fr auto',
                alignItems: 'center', gap: '2rem',
                padding: '2.5rem 3rem', background: 'var(--bg)',
                textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer',
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{link.label}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', letterSpacing: '0.03em', color: 'var(--white)' }}>{link.value}</p>
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>Open →</span>
            </motion.a>
          ))}
        </div>
      </section>

    </motion.div>
  )
}
