import { motion } from 'framer-motion'
import bg from '../assets/bg.png'

import zenabImg from '../assets/alumni/zenab.png'
import uzairImg from '../assets/alumni/uzair.png'
import hassanImg from '../assets/alumni/hassan.png'
import arhamImg from '../assets/alumni/arham.png'
import nasikImg from '../assets/alumni/nasik.png'
import mubeenImg from '../assets/alumni/mubee.png'
import husImg from '../assets/alumni/hus.png'
import burrImg from '../assets/alumni/burr.png'
const alumni = [
  {
    name: 'Hassan Atif Cheema',
    role: 'President, ISL Science Society',
    year: '2025–26',
    bio: 'One of the most accomplished tenures in the Society\'s history. Hassan led the Society to Best Delegation at LUMS PSIFI, ending a four year wait. A dominant force in biology, he earned the Outstanding Cambridge Learner Award in O Level Biology, won the IYBT, reached the national camp for IYPT, and represented Pakistan at the International Biology Olympiad 2026 in Vilnius, Lithuania.',
    img: hassanImg,
  },
{
  name: 'Muhammad Nasik Tariq',
  role: 'President, ISL Science Society',
  year: '2025–26',
  bio: 'Nasik\'s tenure was the one the Society had been building toward. He led ISL to victory at the Pakistan Young Physicists\' Tournament nationals, won the IYBT as a competitor, and built a crop analyzer that won the Global Innovations Award at the London School of Economics. All of that led to the moment that defined his presidency: Best Delegation at LUMS PSIFI, ending four years of near misses.',
  img: nasikImg,
},
   {
    name: 'Muhammad Raffay',
    role: 'President, ISL Robotics Society',
    year: '2025–26',
    bio: 'Known across ISL’s STEM societies as Burr. Alongside Sir Adil, he rebuilt the school’s robotics program from a small interest group into the strongest ISL has ever fielded, all while serving as Secretary General of ISL Ingenium ’25. BurrWars is named after him. The culture he built is the one every robotics lead now inherits.',

    img: burrImg,
  },
  {
    name: 'Arham Ijaz Munir',
    role: 'President, ISL Astronomy Society',
    year: '2025–26',
    bio: 'Under Arham\'s tenure, astronomy at ISL swept nearly every major category on the national circuit. She served as Event Head of ISL Ingenium 2026, claimed National Gold at the IAAC, and reached the Asian Regional Finals of ARSSDC as Runner Up. She is currently attending Mount Holyoke College.',
    img: arhamImg,
  },

  {
  name: 'Mubeen Hafeez',
  role: 'President, ISL Math Society',
  year: '2024–25',
  bio: 'Mubeen established the benchmark for student-led competition at ISL, serving as President of the Math Society and the inaugural Event President of ISL Ingenium. He helped deliver a third Runner Up Best Delegation at LUMS PSIFI, continuing the school\'s notorious three-year run that Nasik and Hassan would later end. He is currently an active member of SPADES and a student at LUMS.',
  img: mubeenImg,
},
{
  name: 'Hussain Zaidi',
  role: 'President, ISL Science Society',
  year: '2024–25',
  bio: 'Hussain Zaidi was President of the ISL Science Society in 2024-25 and served as Event Head of ISL Ingenium 2025, the competition’s first edition under its current name. As a competitor, he represented Pakistan at the Hellenic Young Naturalists’ Tournament (HYNT) 2024 in Thessaloniki, Greece. His presidency saw ISL claim Runner-Up Best Delegation at LUMS PSIFI 2024, the final step before the Society broke through the following year.',
  img: husImg,
},

  {
    name: 'Uzair Chaudhary',
    role: 'President, ISL Science Society',
    year: '2023–24',
    bio: 'Uzair\'s tenure marked a turning point for the Society, delivering ISL\'s first ever victory at the Pakistan Young Physicists\' Tournament nationals. He also served as Event President of ISL Magnus, the predecessor to ISL Ingenium, laying the groundwork for what has become the Society\'s flagship competition. He is currently studying at Duke University.',
    img: uzairImg,
  },
  {
    name: 'Zenab Ayub',
    role: 'President, ISL Science Society',
    year: '2023–24',
    bio: 'Zenab took the helm having already made her mark on the national circuit by winning ARSSDC in 2023. As President, she spearheaded ISL Magnus as its Event Head, driving the competition that would later evolve into ISL Ingenium. She is studying Medicine at the University of Liverpool.',
    img: zenabImg,
  },
]

export default function Alumni() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHeader title="ALUMNI" sub="6 years of legacy: ISL Science Society" bg={bg} />

      <section style={{
        padding: 'clamp(5rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem) clamp(8rem, 12vw, 12rem)',
        maxWidth: 1300,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--border)' }}>
          {alumni.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="resp-alumni-row"
              style={{
                background: 'var(--bg)',
                display: 'grid',
                gridTemplateColumns: 'min(260px, 35vw) 1fr',
                gap: 'clamp(1.5rem, 4vw, 4rem)',
                alignItems: 'end',
                padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 3vw, 3rem)',
              }}
            >
              {/* Photo */}
              <div className="resp-alumni-photo" style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%',
                  height: '60%',
                  background: 'radial-gradient(ellipse at bottom, rgba(var(--gold-rgb, 180,140,60), 0.15) 0%, transparent 70%)',
                  filter: 'blur(18px)',
                  borderRadius: '50%',
                  zIndex: 0,
                }} />
                <img
                  src={person.img}
                  alt={person.name}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    maxHeight: 'clamp(220px, 40vw, 420px)',
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    display: 'block',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
                  }}
                />
              </div>

              {/* Text */}
              <div style={{ paddingBottom: '1rem' }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.55rem, 1vw, 0.6rem)',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}>
                  {person.role} · {person.year}
                </p>

                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 4vw, 4.5rem)',
                  letterSpacing: '0.03em',
                  lineHeight: 0.92,
                  marginBottom: '1.5rem',
                }}>
                  {person.name}
                </h2>

                <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.5rem', width: 60 }} />

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.85,
                  maxWidth: 540,
                }}>
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
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
      <div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(1rem, 4vw, 3rem) 4rem', maxWidth: 1300, width: '100%', margin: '0 auto' }}>
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {sub}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 9vw, 9rem)', lineHeight: 0.88, letterSpacing: '0.02em' }}>
          {title}
        </motion.h1>
      </div>
    </section>
  )
}