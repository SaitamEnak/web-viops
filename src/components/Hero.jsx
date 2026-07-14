import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

const ORBIT_IMAGES = [
  `${BASE}imgs/slider/Emprepedia01.png`,
  `${BASE}imgs/slider/Freelance01.png`,
  `${BASE}imgs/slider/JohannaOtranto01.png`,
  `${BASE}imgs/slider/redim01.png`,
  `${BASE}imgs/slider/sinner01.png`,
  `${BASE}imgs/slider/Viops01.png`,
  `${BASE}imgs/slider/Freelance03.png`,
  `${BASE}imgs/slider/sinner04.png`,
]

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
          <div className="hero-button">
            <p>Contáctanos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
