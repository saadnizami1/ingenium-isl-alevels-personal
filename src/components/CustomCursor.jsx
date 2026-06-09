import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  // Touch/stylus devices have no mouse — skip the cursor entirely
  const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches
  if (isTouchOnly) return null

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const over = (e) => {
      setHovering(!!e.target.closest('a, button, [data-hover]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        animate={{ x: mouse.x, y: mouse.y }}
        transition={{ type: 'spring', stiffness: 900, damping: 40 }}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9999,
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--gold)', pointerEvents: 'none',
          marginLeft: -4, marginTop: -4,
        }}
      />
      {/* Ring */}
      <motion.div
        animate={{
          x: mouse.x,
          y: mouse.y,
          scale: hovering ? 1.4 : 1,
        }}
        transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9998,
          width: 24, height: 24, borderRadius: '50%',
          border: '1.5px solid rgba(245,166,35,0.6)',
          pointerEvents: 'none',
          marginLeft: -12, marginTop: -12,
        }}
      />
    </>
  )
}
