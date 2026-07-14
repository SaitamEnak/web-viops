import { useState } from 'react'
import { Check } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div id="contact" className="quote-form-section reveal" ref={ref}>
      <div className="quote-form-grid">
        <div className="quote-form-left">
          <div className="quote-form-intro">
            <h2 className="quote-form-title">Listo para empezar?</h2>
            <p className="quote-form-lead">
              Creemos tu espacio digital juntos.
            </p>
          </div>
          <div className="quote-form-testimonial">
            <div className="quote-form-avatar" aria-hidden="true">M</div>
            <p className="quote-form-quote">
              “Su capacidad para escuchar, desafiar supuestos y traducir ideas en un sistema digital claro hizo una diferencia real para nuestra marca.”
            </p>
            <p className="quote-form-author">MARCO DOMANI</p>
            <p className="quote-form-role">FUNDADOR, VALTERO</p>
          </div>
        </div>

        <div className="quote-form-card">
          {sent ? (
            <div className="quote-form-success">
              <div className="quote-form-success-icon">
                <Check size={26} />
              </div>
              <p className="quote-form-success-title">¡Solicitud enviada!</p>
              <p className="quote-form-success-desc">
                Gracias por escribirnos. Nos pondremos en contacto en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="qf-group">
                <label className="qf-label">NOMBRE</label>
                <div className="qf-row-2">
                  <input
                    type="text"
                    required
                    placeholder="Nombre"
                    value={form.firstName}
                    onChange={update('firstName')}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Apellido"
                    value={form.lastName}
                    onChange={update('lastName')}
                  />
                </div>
              </div>

              <div className="qf-group">
                <label className="qf-label" htmlFor="qf-email">EMAIL</label>
                <input
                  id="qf-email"
                  type="email"
                  required
                  placeholder="Tu email"
                  value={form.email}
                  onChange={update('email')}
                />
              </div>

              <div className="qf-group">
                <label className="qf-label" htmlFor="qf-message">MENSAJE</label>
                <textarea
                  id="qf-message"
                  required
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?..."
                  value={form.message}
                  onChange={update('message')}
                />
              </div>

              <button type="submit" className="qf-cta">
                SOLICITAR PRESUPUESTO
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
