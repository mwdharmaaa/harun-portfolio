import { useEffect, useState } from 'react'

export const AmbientGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-1000"
      style={{
        background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(56, 189, 248, 0.08), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  )
}
