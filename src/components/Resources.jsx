import { useState } from 'react'
import { Check } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Resources() {
  const ref = useReveal()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div id="resources" className="resources reveal" ref={ref}>
      <div className="resources-card">
        <div className="resources-content">
          <div className="resources-header">
            <div className="badge resources-badge">
              <p>Ebook Gratuito</p>
            </div>
            <p className="resources-title">Qué necesitás para tener una web</p>
            <p className="resources-subtitle">
              Una guía práctica con todo lo que tenés que definir antes, durante y después de lanzar tu sitio: objetivos, contenido, diseño, hosting y métricas. Dejanos tu correo y te la enviamos gratis.
            </p>
          </div>

          {submitted ? (
            <div className="resources-success">
              <div className="resources-success-icon">
                <Check size={20} />
              </div>
              <p>¡Listo! Te enviamos el ebook a tu correo en unos minutos.</p>
            </div>
          ) : (
            <form className="resources-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="resources-input"
                placeholder="tucorreo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Correo electrónico"
              />
              <button type="submit" className="resources-submit">
                Quiero el ebook
              </button>
            </form>
          )}
        </div>

        <div className="resources-mockup" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}imgs/bookmock.png`} alt="" className="resources-mockup-img" />
        </div>
      </div>
    </div>
  )
}
