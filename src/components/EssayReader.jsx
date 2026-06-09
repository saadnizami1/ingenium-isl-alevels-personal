import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FONTS = [
  { key: 'sans',  label: 'Sans',  value: "'DM Sans', sans-serif" },
  { key: 'serif', label: 'Serif', value: "Georgia, 'Times New Roman', serif" },
  { key: 'mono',  label: 'Mono',  value: "'Courier New', monospace" },
]
const SIZES = [
  { key: 'sm', label: 'A', px: 16, lh: 1.8 },
  { key: 'md', label: 'A', px: 19, lh: 1.85 },
  { key: 'lg', label: 'A', px: 23, lh: 1.9 },
]

// ─── Block renderers ────────────────────────────────────────────────────────

function Paragraph({ text, font, size, c }) {
  return (
    <p style={{
      fontFamily: font.value, fontSize: size.px, lineHeight: size.lh,
      color: c.text, marginBottom: '1.4em',
      transition: 'font-size 0.2s, font-family 0.2s, color 0.3s',
    }}>{text}</p>
  )
}

function Equation({ formula, note, font, c }) {
  return (
    <div style={{
      margin: '2.5rem 0', padding: '1.75rem 2rem',
      background: c.eqBg,
      border: `1px solid ${c.eqBorder}`,
      borderLeft: `3px solid ${c.gold}`,
      borderRadius: '0 6px 6px 0',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <p style={{
        fontFamily: "'Courier New', monospace",
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
        color: c.gold, letterSpacing: '0.06em',
        marginBottom: note ? '0.75rem' : 0, lineHeight: 1.5,
      }}>{formula}</p>
      {note && (
        <p style={{
          fontFamily: font.value, fontSize: 13,
          color: c.muted, lineHeight: 1.6,
          transition: 'color 0.3s',
        }}>{note}</p>
      )}
    </div>
  )
}

function CodeBlock({ lines, c }) {
  return (
    <div style={{
      margin: '2rem 0', padding: '1.5rem 2rem',
      background: c.eqBg,
      border: `1px solid ${c.eqBorder}`,
      borderRadius: 6,
      transition: 'background 0.3s',
    }}>
      {lines.map((line, i) => (
        <p key={i} style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 15, color: c.text,
          lineHeight: 1.9, letterSpacing: '0.04em',
          transition: 'color 0.3s',
        }}>{line}</p>
      ))}
    </div>
  )
}

function DataTable({ headers, rows, font, c }) {
  return (
    <div style={{
      margin: '2.5rem 0', overflowX: 'auto',
      border: `1px solid ${c.tableBorder}`,
      borderRadius: 6,
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: c.tableHead }}>
            {headers.map(h => (
              <th key={h} style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.58rem', letterSpacing: '0.22em',
                textTransform: 'uppercase', color: c.gold,
                padding: '0.9rem 1.1rem', textAlign: 'left',
                borderBottom: `1px solid ${c.tableBorder}`,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 1 ? c.tableAlt : 'transparent' }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  fontFamily: ci === 0 ? 'var(--font-heading)' : font.value,
                  fontSize: ci === 0 ? 12 : 13,
                  letterSpacing: ci === 0 ? '0.1em' : 0,
                  textTransform: ci === 0 ? 'uppercase' : 'none',
                  color: ci === 0 ? c.muted : c.text,
                  padding: '0.85rem 1.1rem', lineHeight: 1.5,
                  borderBottom: ri < rows.length - 1 ? `1px solid ${c.tableBorder}` : 'none',
                  whiteSpace: ci === 0 ? 'nowrap' : 'normal',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderBlock(block, font, size, c, idx) {
  switch (block.type) {
    case 'p':      return <Paragraph key={idx} text={block.text} font={font} size={size} c={c} />
    case 'eq':     return <Equation  key={idx} formula={block.formula} note={block.note} font={font} c={c} />
    case 'code':   return <CodeBlock key={idx} lines={block.lines} c={c} />
    case 'table':  return <DataTable key={idx} headers={block.headers} rows={block.rows} font={font} c={c} />
    default:       return null
  }
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function EssayReader({ seriesLabel, title, author, date, sections }) {
  const [theme, setTheme]     = useState('dark')
  const [fontKey, setFontKey] = useState('sans')
  const [sizeKey, setSizeKey] = useState('md')

  const font   = FONTS.find(f => f.key === fontKey)
  const size   = SIZES.find(s => s.key === sizeKey)
  const isDark = theme === 'dark'

  const c = {
    bg:           isDark ? '#080006'                : '#f5f2ed',
    border:       isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.1)',
    text:         isDark ? 'rgba(255,255,255,0.88)' : '#1a1a1a',
    muted:        isDark ? 'rgba(255,255,255,0.35)' : '#888',
    heading:      isDark ? '#ffffff'                : '#0f0f0f',
    gold:         '#f5a623',
    eqBg:         isDark ? 'rgba(245,166,35,0.07)'  : 'rgba(245,166,35,0.1)',
    eqBorder:     isDark ? 'rgba(245,166,35,0.25)'  : 'rgba(245,166,35,0.4)',
    toolbarBg:    isDark ? 'rgba(8,0,6,0.95)'       : 'rgba(245,242,237,0.95)',
    toolbarBorder:isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
    tableBorder:  isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
    tableHead:    isDark ? 'rgba(245,166,35,0.08)'  : 'rgba(245,166,35,0.12)',
    tableAlt:     isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
  }

  useEffect(() => {
    document.body.style.background = c.bg
    return () => { document.body.style.background = '' }
  }, [theme])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ background: c.bg, minHeight: '100vh', transition: 'background 0.3s' }}
    >
      {/* Toolbar */}
      <div className="resp-essay-toolbar" style={{
        position: 'sticky', top: 80, zIndex: 900,
        background: c.toolbarBg,
        borderBottom: `1px solid ${c.toolbarBorder}`,
        backdropFilter: 'blur(20px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.7rem clamp(1.5rem, 5vw, 4rem)',
        gap: '1.5rem',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <Link to="/newsletter" className="resp-essay-toolbar-back" style={{
          fontFamily: 'var(--font-heading)', fontSize: '0.62rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: c.muted, whiteSpace: 'nowrap',
        }}>
          ← Newsletter
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {/* Size */}
          <div style={{ display: 'flex', gap: '2px' }}>
            {SIZES.map((s, idx) => (
              <button key={s.key} onClick={() => setSizeKey(s.key)} style={{
                background: sizeKey === s.key ? c.gold : 'transparent',
                border: `1px solid ${sizeKey === s.key ? c.gold : c.toolbarBorder}`,
                color: sizeKey === s.key ? '#080006' : c.muted,
                width: 28 + idx * 4, height: 28, borderRadius: 4,
                fontFamily: 'var(--font-heading)', fontSize: 9 + idx * 2, fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{s.label}</button>
            ))}
          </div>
          <div style={{ width: 1, height: 20, background: c.toolbarBorder }} />
          {/* Font */}
          <div style={{ display: 'flex', gap: '2px' }}>
            {FONTS.map(f => (
              <button key={f.key} onClick={() => setFontKey(f.key)} style={{
                background: fontKey === f.key ? c.gold : 'transparent',
                border: `1px solid ${fontKey === f.key ? c.gold : c.toolbarBorder}`,
                color: fontKey === f.key ? '#080006' : c.muted,
                padding: '0 10px', height: 28, borderRadius: 4,
                fontFamily: f.value, fontSize: 11, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{f.label}</button>
            ))}
          </div>
          <div style={{ width: 1, height: 20, background: c.toolbarBorder }} />
          {/* Theme */}
          <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} style={{
            background: 'transparent',
            border: `1px solid ${c.toolbarBorder}`,
            color: c.muted, width: 32, height: 28, borderRadius: 4,
            fontSize: 14, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>
            {isDark ? '☀' : '☾'}
          </button>
        </div>
      </div>

      {/* Article */}
      <article className="resp-essay-article" style={{
        maxWidth: 680, margin: '0 auto',
        padding: 'clamp(3rem, 7vw, 6rem) clamp(1.5rem, 5vw, 2rem) clamp(6rem, 10vw, 10rem)',
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} style={{ marginBottom: '3rem' }}
        >
          <p style={{
            fontFamily: 'var(--font-heading)', fontSize: '0.6rem',
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: c.gold, marginBottom: '1.5rem',
          }}>{seriesLabel}</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            lineHeight: 0.95, letterSpacing: '0.03em',
            color: c.heading, marginBottom: '1.5rem',
            transition: 'color 0.3s',
          }}>{title}</h1>
          <p style={{ fontFamily: font.value, fontSize: 15, color: c.muted, lineHeight: 1.6 }}>
            By <span style={{ color: c.text }}>{author}</span> · {date}
          </p>
          <div style={{
            marginTop: '2.5rem', height: 1,
            background: `linear-gradient(to right, ${c.gold}, transparent)`,
            opacity: 0.4,
          }} />
        </motion.div>

        {/* Sections */}
        {sections.map((sec, si) => (
          <motion.section
            key={si}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + si * 0.07, duration: 0.7 }}
            style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            {sec.heading && (
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
                letterSpacing: '0.04em', color: c.heading,
                marginBottom: '1.5rem', transition: 'color 0.3s',
              }}>{sec.heading}</h2>
            )}
            {sec.blocks.map((block, bi) => renderBlock(block, font, size, c, bi))}
          </motion.section>
        ))}

        {/* Footer */}
        <div style={{
          marginTop: '4rem', paddingTop: '2rem',
          borderTop: `1px solid ${c.border}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-heading)', fontSize: '0.6rem',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: c.muted,
          }}>Ingenium · ISL Science Society</p>
          <Link to="/newsletter" style={{
            fontFamily: 'var(--font-heading)', fontSize: '0.62rem',
            letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold,
          }}>← Back to Newsletter</Link>
        </div>
      </article>
    </motion.div>
  )
}
