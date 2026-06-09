import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import bg from '../assets/bg.png'

const categories = [
  {
    id: 'ingenium',
    label: 'INGENIUM',
    desc: 'The main event.',
    featured: true,
    events: [
      {
        name: 'INGENIUM',
        date: '28-30 August 2026',
        status: 'Open',
        desc: 'ISL\'s flagship science event. 10+ competition categories, 30+ schools, and delegates from across the country — sponsored by Pakistan\'s largest organizations and run and mentored by some of Pakistan\'s most distinguished STEM personalities.',
        registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdnF3o_jyTuPtrfI_F4WBUpIEaibtNp2ti4Rue0aZ0nOwgiA/viewform',
      },
    ],
  },
  {
    id: 'competitions',
    label: 'Competitions',
    desc: 'Compete. Win. Repeat.',
    subdesc: 'Only for the local student body of ISL Ring Road.',
    footnote: 'Contact STEM Presidents for more details and registration.',
    events: [
      { name: 'NUST NERC', date: 'Jul 2026', status: 'Upcoming', desc: '' },
      { name: 'ARSSDC', date: 'TBA', status: 'Upcoming', desc: '' },
      { name: 'ACM × ISL AI Hackathon', date: 'TBA', status: 'Upcoming', desc: '' },
      { name: 'CERN BL4S', date: 'Feb 2026', status: 'Past', desc: '' },
    ],
  },
  {
    id: 'talks',
    label: 'Talks & Seminars',
    desc: 'Hear something worth thinking about.',
    events: [
      { name: 'ISL Speaker Series', date: 'Termly', status: 'Ongoing', desc: 'Talks from ISL faculty, alumni, and invited guests on topics across the sciences and beyond.' },
      { name: 'ACM Professional Panel Talk', date: 'February 2026in ', status: 'Past', desc: 'A panel discussion conducted by industry leaders, brought to ISL in collaboration with ACM.' },
    ],
  },
  {
    id: 'workshops',
    label: 'Workshops',
    desc: 'Hands on.',
    events: [
      { name: 'Practical Lab Sessions', date: 'Ongoing', status: 'Ongoing', desc: 'Hands-on lab sessions covering A-Level Biology, Chemistry, Computer Science, and Physics.' },
      { name: 'ACM Seminars', date: 'Ongoing', status: 'Ongoing', desc: 'Hosted by the ACM tech team — covering Python and AI applications. Open to complete beginners and experienced students alike.' },
      { name: 'NERC Robotics', date: 'Ongoing', status: 'Ongoing', desc: 'Robot building sessions run as part of NERC preparation. Hands-on engineering from the ground up.' },
      { name: 'PSIFI Workshops', date: 'Dec 2025', status: 'Past', desc: '' },
      { name: 'PYPT Training', date: 'Feb 2026', status: 'Past', desc: '' },
    ],
  },
]

const statusColor = { Upcoming: 'var(--gold)', Open: '#4ade80', Ongoing: '#4ade80', Past: 'rgba(255,255,255,0.25)' }

export default function Events() {
  const [active, setActive] = useState('ingenium')
  const cat = categories.find(c => c.id === active)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader title="EVENTS" sub="What's Happening" bg={bg} />

      <section className="resp-section resp-events-section" style={{ padding: '6rem 3rem 12rem', maxWidth: 1300, margin: '0 auto' }}>
        {/* Tabs */}
        <div className="resp-tabs" style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '5rem', gap: 0, flexWrap: 'wrap' }}>
          {categories.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              padding: '1.25rem 2.5rem', background: 'none', border: 'none', cursor: 'pointer',
              borderBottom: active === c.id ? '2px solid var(--gold)' : '2px solid transparent',
              color: active === c.id ? (c.featured ? 'var(--gold)' : 'var(--white)') : 'rgba(255,255,255,0.3)',
              fontFamily: 'var(--font-heading)', fontSize: c.featured ? '0.8rem' : '0.72rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              marginBottom: -1, transition: 'color 0.2s',
              fontWeight: c.featured ? 700 : 400,
            }}>
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: cat.subdesc ? '0.6rem' : '3rem' }}>
              {cat.desc}
            </p>
            {cat.subdesc && (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '3rem' }}>
                {cat.subdesc}
              </p>
            )}

            {/* Featured INGENIUM hero card */}
            {cat.featured ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--border)' }}>
                {cat.events.map((ev, i) => (
                  <motion.div key={ev.name}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    style={{
                      padding: 'clamp(3rem, 5vw, 5rem) clamp(2rem, 4vw, 4rem)',
                      background: 'var(--bg)',
                      position: 'relative', overflow: 'hidden',
                    }}
                  >
                    {/* Faint background watermark — contained so full word fits */}
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
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{ev.date}</span>
                      </div>

                      <h2 style={{
                        fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 9rem)',
                        letterSpacing: '0.04em', lineHeight: 0.9,
                        marginBottom: '2rem', color: 'var(--white)',
                      }}>{ev.name}</h2>

                      <p style={{ color: 'var(--gray)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.8, maxWidth: 600, marginBottom: '2.5rem' }}>{ev.desc}</p>

                      <a
                        href={ev.registerUrl}
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
                ))}
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--border)' }}>
                  {cat.events.map((ev, i) => (
                    <motion.div key={ev.name}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ paddingLeft: '4rem', background: 'rgba(245,166,35,0.03)' }}
                      className="resp-event-row"
                      style={{
                        padding: '2.75rem 3rem', background: 'var(--bg)',
                        display: 'grid', gridTemplateColumns: '1fr auto',
                        alignItems: 'center', gap: '2rem', transition: 'all 0.3s ease',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '0.04em' }}>{ev.name}</h3>
                          <span style={{ padding: '0.2rem 0.75rem', border: `1px solid ${statusColor[ev.status]}`, color: statusColor[ev.status], fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                            {ev.status}
                          </span>
                        </div>
                        <p style={{ color: 'var(--gray)', fontSize: '0.88rem', lineHeight: 1.6 }}>{ev.desc}</p>
                      </div>
                      <p className="resp-event-date" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', textAlign: 'right', minWidth: 80 }}>{ev.date}</p>
                    </motion.div>
                  ))}
                </div>
                {cat.footnote && (
                  <p style={{ marginTop: '2.5rem', fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(255,255,255,0.3)' }}>
                    {cat.footnote}
                  </p>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
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
          style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>{sub}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 11vw, 11rem)', lineHeight: 0.88, letterSpacing: '0.02em' }}>{title}</motion.h1>
      </div>
    </section>
  )
}
