<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const colorMode = useColorMode()

// Animation state
let ctx: CanvasRenderingContext2D | null = null
let animationId: number | null = null
let particles: Particle[] = []
let mouseX = -1000
let mouseY = -1000
let lintBeamY = -100
let lintBeamActive = false
let lastLintTime = 0
const LINT_INTERVAL = 6000 // Lint every 6 seconds
const LINT_BEAM_SPEED = 3

// Code symbols for particles
const CODE_SYMBOLS = ['{', '}', '(', ')', '=>', '//', ';', 'const', 'let', 'lint', '&&', '||', '===', '[]', '<>', 'fn']

// Colors - Light mode needs stronger colors since background is white
const isDark = computed(() => colorMode.value === 'dark')
const colors = computed(() => ({
  error: isDark.value ? 'rgba(239, 68, 68, 0.9)' : 'rgba(220, 38, 38, 0.9)',
  fixed: isDark.value ? 'rgba(129, 140, 248, 0.8)' : 'rgba(79, 70, 229, 0.8)',
  beam: isDark.value ? 'rgba(129, 140, 248, 0.08)' : 'rgba(99, 102, 241, 0.06)',
  beamGlow: isDark.value ? 'rgba(129, 140, 248, 0.02)' : 'rgba(99, 102, 241, 0.015)',
}))

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  symbol: string
  size: number
  speedY: number
  speedX: number
  opacity: number
  state: 'error' | 'fixed'
  stateTimer: number
  rotation: number
  rotationSpeed: number
}

function createParticle(canvasWidth: number, canvasHeight: number, startAtBottom = false): Particle {
  const x = Math.random() * canvasWidth
  const y = startAtBottom ? canvasHeight + 20 : Math.random() * canvasHeight
  return {
    x,
    y,
    baseX: x,
    baseY: y,
    symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
    size: 10 + Math.random() * 8,
    speedY: -(0.2 + Math.random() * 0.4), // Float upward
    speedX: (Math.random() - 0.5) * 0.3, // Slight horizontal drift
    opacity: 0.4 + Math.random() * 0.4, // Higher opacity since particles are only visible when linted
    state: 'error', // Start as errors (red) waiting to be linted
    stateTimer: 0,
    rotation: Math.random() * Math.PI * 0.1 - Math.PI * 0.05,
    rotationSpeed: (Math.random() - 0.5) * 0.002,
  }
}

function initParticles() {
  if (!canvas.value) return
  
  const width = canvas.value.width
  const height = canvas.value.height
  
  // Fewer particles on mobile
  const isMobile = width < 768
  const particleCount = isMobile ? 35 : 60
  
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle(width, height))
  }
}

function handleMouseMove(e: MouseEvent) {
  if (!canvas.value) return
  const rect = canvas.value.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

function handleMouseLeave() {
  mouseX = -1000
  mouseY = -1000
}

function handleResize() {
  if (!canvas.value) return
  canvas.value.width = canvas.value.offsetWidth
  canvas.value.height = canvas.value.offsetHeight
  initParticles()
}

function drawParticle(p: Particle) {
  if (!ctx) return
  
  // Determine color based on state
  const color = p.state === 'error' ? colors.value.error : colors.value.fixed
  
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rotation)
  ctx.font = `${p.size}px "JetBrains Mono", "Fira Code", monospace`
  ctx.fillStyle = color
  ctx.globalAlpha = p.opacity
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  // Add glow for particles
  if (p.state === 'error') {
    ctx.shadowColor = isDark.value ? 'rgba(239, 68, 68, 0.9)' : 'rgba(220, 38, 38, 0.7)'
    ctx.shadowBlur = 12
  } else {
    ctx.shadowColor = isDark.value ? 'rgba(129, 140, 248, 0.9)' : 'rgba(79, 70, 229, 0.6)'
    ctx.shadowBlur = 14
  }
  
  ctx.fillText(p.symbol, 0, 0)
  ctx.restore()
}

function drawLintBeam() {
  if (!ctx || !canvas.value || !lintBeamActive) return
  
  const width = canvas.value.width
  
  // Draw very subtle, tight beam glow
  const glowSize = 12
  const gradient = ctx.createLinearGradient(0, lintBeamY - glowSize, 0, lintBeamY + glowSize)
  gradient.addColorStop(0, 'transparent')
  gradient.addColorStop(0.45, colors.value.beamGlow)
  gradient.addColorStop(0.5, colors.value.beam)
  gradient.addColorStop(0.55, colors.value.beamGlow)
  gradient.addColorStop(1, 'transparent')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, lintBeamY - glowSize, width, glowSize * 2)
}

function updateParticle(p: Particle, canvasWidth: number, canvasHeight: number) {
  // Base movement
  p.baseY += p.speedY
  p.baseX += p.speedX
  p.rotation += p.rotationSpeed
  
  // Mouse repulsion
  const dx = p.baseX - mouseX
  const dy = p.baseY - mouseY
  const dist = Math.sqrt(dx * dx + dy * dy)
  const repelRadius = 120
  
  if (dist < repelRadius && dist > 0) {
    const force = (repelRadius - dist) / repelRadius
    const pushX = (dx / dist) * force * 30
    const pushY = (dy / dist) * force * 30
    p.x = p.baseX + pushX
    p.y = p.baseY + pushY
  } else {
    // Elastic return
    p.x += (p.baseX - p.x) * 0.1
    p.y += (p.baseY - p.y) * 0.1
  }
  
  // Lint beam interaction - when beam passes, it FIXES the error (red -> purple)
  const beamPassedThrough = lintBeamActive && 
    p.baseY >= lintBeamY - LINT_BEAM_SPEED && 
    p.baseY <= lintBeamY + LINT_BEAM_SPEED &&
    p.state === 'error'
  
  if (beamPassedThrough) {
    // Beam fixes the error
    p.state = 'fixed'
    p.stateTimer = 0
  }
  
  // State transitions
  if (p.state === 'fixed') {
    p.stateTimer++
    if (p.stateTimer > 180) { // ~3 seconds in purple/fixed state, then back to error
      p.state = 'error'
      p.stateTimer = 0
    }
  }
  
  // Reset particle when it goes off screen
  if (p.baseY < -50) {
    const newParticle = createParticle(canvasWidth, canvasHeight, true)
    Object.assign(p, newParticle)
  }
  
  // Wrap horizontally
  if (p.baseX < -50) p.baseX = canvasWidth + 50
  if (p.baseX > canvasWidth + 50) p.baseX = -50
}

function animate(timestamp: number) {
  if (!ctx || !canvas.value) return
  
  const width = canvas.value.width
  const height = canvas.value.height
  
  // Clear canvas
  ctx.clearRect(0, 0, width, height)
  
  // Update lint beam
  if (timestamp - lastLintTime > LINT_INTERVAL) {
    lintBeamActive = true
    lintBeamY = -40
    lastLintTime = timestamp
  }
  
  if (lintBeamActive) {
    lintBeamY += LINT_BEAM_SPEED
    if (lintBeamY > height + 40) {
      lintBeamActive = false
    }
  }
  
  // Draw beam behind particles
  drawLintBeam()
  
  // Update and draw particles
  for (const p of particles) {
    updateParticle(p, width, height)
    drawParticle(p)
  }
  
  animationId = requestAnimationFrame(animate)
}

// Check for reduced motion preference
const prefersReducedMotion = ref(false)

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion.value) return
  
  if (canvas.value) {
    ctx = canvas.value.getContext('2d')
    handleResize()
    
    // Start animation
    animationId = requestAnimationFrame(animate)
    
    // Event listeners
    window.addEventListener('resize', handleResize)
    canvas.value.addEventListener('mousemove', handleMouseMove)
    canvas.value.addEventListener('mouseleave', handleMouseLeave)
    
    // Pause when tab not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      } else if (!document.hidden && !animationId) {
        animationId = requestAnimationFrame(animate)
      }
    })
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
  if (canvas.value) {
    canvas.value.removeEventListener('mousemove', handleMouseMove)
    canvas.value.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<template>
  <canvas
    ref="canvas"
    class="absolute inset-0 w-full h-full pointer-events-auto"
    aria-hidden="true"
  />
</template>
