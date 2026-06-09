import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Events', path: '/events' },
  { label: 'Executive Council', path: '/science-ec' },
  { label: 'Sponsors', path: '/sponsors' },
  { label: 'Newsletter', path: '/newsletter' },
  { label: 'Alumni', path: '/alumni' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '1.25rem 3rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled || menuOpen ? 'rgba(8,0,6,0.88)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-gold)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img src={logo} alt="Ingenium" style={{ width: 40, height: 40, objectFit: 'contain', mixBlendMode: 'screen' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '0.18em', color: 'var(--white)' }}>
            INGENIUM
          </span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {links.map((l) => {
            const active = location.pathname === l.path
            return (
              <Link key={l.path} to={l.path} style={{ position: 'relative' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)', fontSize: '0.72rem',
                  fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: active ? 'var(--gold)' : 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s',
                }}>
                  {l.label}
                </span>
                {active && (
                  <motion.div
                    layoutId="nav-pill"
                    style={{
                      position: 'absolute', bottom: -5, left: 0, right: 0,
                      height: 1, background: 'var(--gold)',
                    }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            background: 'none', border: 'none', padding: '4px', cursor: 'pointer',
          }}
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--white)', transformOrigin: 'center' }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--white)' }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--white)', transformOrigin: 'center' }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.path}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link to={l.path} className="nav-mobile-link" style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.8rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: location.pathname === l.path ? 'var(--gold)' : 'var(--white)',
                  display: 'block', textAlign: 'center',
                }}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
