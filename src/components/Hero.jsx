import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

const ORBIT_IMAGES = [
  `${BASE}imgs/slider/01.png`,
  `${BASE}imgs/slider/02.png`,
  `${BASE}imgs/slider/03.png`,
  `${BASE}imgs/slider/04.png`,
  `${BASE}imgs/slider/05.png`,
  `${BASE}imgs/slider/06.png`,
  `${BASE}imgs/slider/07.png`,
  `${BASE}imgs/slider/08.png`,
  `${BASE}imgs/slider/09.png`,
  `${BASE}imgs/slider/10.png`,
]

function scrollToContact() {
  const target = document.getElementById('contact')
  if (!target) return
  const rect = target.getBoundingClientRect()
  const absoluteTop = rect.top + window.scrollY
  const top = absoluteTop - (window.innerHeight - rect.height) / 2
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

export default function Hero() {
  const ref = useReveal()
  const N = ORBIT_IMAGES.length

  return (
    <div id="hero" className="hero reveal" ref={ref}>
      <div className="orbit-scene">
        <div className="orbit-ring">
          {ORBIT_IMAGES.map((src, i) => {
            const angle = (i / N) * 360
            return (
              <div
                key={i}
                className="orbit-arm"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <img
                  className="orbit-img"
                  src={src}
                  alt=""
                />
              </div>
            )
          })}
        </div>
        <div className="hero-center">
          <img
            className="hero-logo"
            src={`${BASE}logo header.svg`}
            alt="Ovus"
          />
          <div className="hero-text">
            <p className="hero-title">Creemos en el diseño<br />que logra objetivos.</p>
            <p className="hero-subtitle">Cada decisión visual existe para guiar, persuadir y convertir.</p>
          </div>
          <div className="hero-button" onClick={scrollToContact} style={{ cursor: 'pointer' }}>
            <p>Solicitar presupuesto</p>
          </div>
        </div>
      </div>
    </div>
  )
}
