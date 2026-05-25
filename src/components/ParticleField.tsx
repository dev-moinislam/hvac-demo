import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  type: 'cold' | 'warm'
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const maxParticles = 120

    const spawnParticle = () => {
      const type = Math.random() > 0.5 ? 'cold' : 'warm'
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(Math.random() * 1.5 + 0.5),
        life: 0,
        maxLife: Math.random() * 200 + 100,
        size: Math.random() * 3 + 1,
        type,
      })
    }

    let frameCount = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frameCount++
      if (frameCount % 3 === 0 && particles.length < maxParticles) {
        spawnParticle()
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        if (p.life > p.maxLife || p.y < -10) {
          particles.splice(i, 1)
          continue
        }

        const progress = p.life / p.maxLife
        const alpha = Math.sin(progress * Math.PI) * 0.6

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

        if (p.type === 'cold') {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
          gradient.addColorStop(0, `rgba(56, 189, 248, ${alpha})`)
          gradient.addColorStop(1, `rgba(14, 165, 233, 0)`)
          ctx.fillStyle = gradient
        } else {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
          gradient.addColorStop(0, `rgba(251, 191, 36, ${alpha * 0.8})`)
          gradient.addColorStop(1, `rgba(249, 115, 22, 0)`)
          ctx.fillStyle = gradient
        }
        ctx.fill()
      }

      // Draw flowing air lines
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.06)'
      ctx.lineWidth = 1
      for (let i = 0; i < 5; i++) {
        const offset = (frameCount * 0.5 + i * 200) % canvas.height
        ctx.beginPath()
        ctx.moveTo(0, offset)
        for (let x = 0; x <= canvas.width; x += 20) {
          ctx.lineTo(x, offset + Math.sin((x + frameCount * 2) * 0.01 + i) * 30)
        }
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
