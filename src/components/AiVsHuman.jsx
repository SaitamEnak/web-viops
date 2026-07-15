import { useCallback, useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

const IMG_AI = `${BASE}imgs/ai-vs-human/ai.png`
const IMG_HUMAN = `${BASE}imgs/ai-vs-human/human.png`

const svgPlaceholder = (label, bg, fg) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'>
      <defs>
        <pattern id='p' width='40' height='40' patternUnits='userSpaceOnUse'>
          <path d='M0 40 L40 0' stroke='${fg}' stroke-opacity='0.08' stroke-width='1'/>
        </pattern>
      </defs>
      <rect width='1600' height='900' fill='${bg}'/>
      <rect width='1600' height='900' fill='url(#p)'/>
      <text x='800' y='470' text-anchor='middle' font-family='Figtree, sans-serif' font-size='42' font-weight='500' fill='${fg}'>${label}</text>
    </svg>`
  )}`

const FALLBACK_AI = svgPlaceholder('Web hecha con IA', '#1a1a1c', '#b0b0b6')
const FALLBACK_HUMAN = svgPlaceholder('Diseñada por Viops', '#f4f4f5', '#111114')

const handleImgError = (fallback) => (e) => {
  if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback
}

export default function AiVsHuman() {
  const ref = useReveal()
  const frameRef = useRef(null)
  const draggingRef = useRef(false)
  const [position, setPosition] = useState(50)

  const updateFromClientX = useCallback((clientX) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  const handlePointerDown = (e) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const handlePointerUp = (e) => {
    draggingRef.current = false
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 4))
      if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 4))
    }
    const frame = frameRef.current
    frame?.addEventListener('keydown', onKey)
    return () => frame?.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div id="ai-vs-human" className="aivh reveal" ref={ref}>
      <div className="section-header">
        <div className="badge">
          <p>El resultado</p>
        </div>
        <h2 className="section-title">Velocidad de IA.<br />Detalle humano.</h2>
        <p className="section-subtitle">
          Uno cumple. El otro emociona.<br />
          Porque tu marca merece algo que se sienta, no solo algo que funcione.
        </p>
      </div>

      <div
        className="aivh-frame"
        ref={frameRef}
        tabIndex={0}
        role="slider"
        aria-label="Comparación entre web hecha con IA y web diseñada por Viops"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <img
          className="aivh-image aivh-image-human"
          src={IMG_HUMAN}
          onError={handleImgError(FALLBACK_HUMAN)}
          alt="Web diseñada por Viops"
          draggable={false}
        />
        <div
          className="aivh-clip"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            className="aivh-image aivh-image-ai"
            src={IMG_AI}
            onError={handleImgError(FALLBACK_AI)}
            alt="Web generada por IA"
            draggable={false}
          />
        </div>

        <span className="aivh-tag aivh-tag-ai">Hecha con IA</span>
        <span className="aivh-tag aivh-tag-human">Diseñada por Viops</span>

        <div
          className="aivh-handle"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <div className="aivh-handle-line" />
          <div className="aivh-handle-knob">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
      </div>
    </div>
  )
}
