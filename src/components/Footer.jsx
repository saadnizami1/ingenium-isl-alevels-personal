import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Register', '/events'],
  ['Executive Council', '/science-ec'],
  ['Sponsors', '/sponsors'],
  ['Newsletter', '/newsletter'],
  ['Alumni', '/alumni'],
]

const external = [
  { label: 'ISL Website', href: 'https://www.isl.school/' },
  { label: 'Maps', href: 'https://www.google.com/maps/dir//INTERNATIONAL+SCHOOL+LAHORE+(Legacy+Campus+Ring+Road),+1+Ring+Road%D8%8C+adj.+Sector+M%D8%8C+Leel+Phase+5+D.H.A,+Lahore,+54000,+Pakistan%E2%80%AD/@31.4690708,74.3939335,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x391909c6b16a40cb:0x8d10cb1a75207c99!2m2!1d74.406186!2d31.4508295?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D' },
  { label: 'Instagram', href: 'https://www.instagram.com/isl.ingenium/' },
  { label: 'Email', href: 'mailto:ingenium.isl@gmail.com' },
]

const linkStyle = {
  color: 'rgba(255,255,255,0.3)',
  fontSize: '0.78rem',
  fontFamily: 'var(--font-body)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  whiteSpace: 'nowrap',
}

function NavLink({ to, children }) {
  return (
    <Link to={to} style={linkStyle}
      onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
    >{children}</Link>
  )
}

function ExtLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}
      onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
    >{children}</a>
  )
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: '#050005' }}>

      {/* Main row */}
      <div className="resp-footer-main" style={{
        maxWidth: 1300, margin: '0 auto',
        padding: '2.5rem 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '2rem',
      }}>

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logo} alt="Ingenium" style={{ width: 32, mixBlendMode: 'screen' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Ingenium</span>
          <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '0.7rem', margin: '0 0.25rem' }}>—</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>ISL Science Society</span>
        </div>

        {/* Nav links */}
        <div className="resp-footer-nav" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 2rem', alignItems: 'center' }}>
          {nav.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
        </div>

      </div>

      {/* Divider */}
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
      </div>

      {/* Bottom bar */}
      <div className="resp-footer-bottom" style={{
        maxWidth: 1300, margin: '0 auto',
        padding: '1.25rem 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
      }}>

        {/* External links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.75rem', alignItems: 'center' }}>
          {external.map(({ label, href }) => <ExtLink key={label} href={href}>{label}</ExtLink>)}
        </div>

        {/* Dev credit */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} Ingenium · Developed by{' '}
          <Link to="/about-the-dev" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: 'rgba(245,166,35,0.45)', transition: 'color 0.2s, text-decoration-color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold-light)'; e.currentTarget.style.textDecorationColor = 'rgba(245,166,35,0.9)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.textDecorationColor = 'rgba(245,166,35,0.45)' }}
          >Saad Nizami</Link>
        </p>

      </div>
    </footer>
  )
}
