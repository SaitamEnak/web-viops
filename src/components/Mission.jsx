import { useReveal } from '../hooks/useReveal'

export default function Mission() {
  const ref = useReveal()

  return (
    <div id="mission" className="mission reveal" ref={ref}>
      <div className="mission-container">
        <div className="mission-content">
          <div className="badge">
            <p>Nuestra misión</p>
          </div>
          <h2 className="mission-title">Construido para mejorar,<br />no solo para lanzar.</h2>
          <p className="mission-desc">
            Somos un pequeño equipo de diseñadores y desarrolladores apasionados por crear soluciones digitales centradas en el usuario.<br /><br />
            Ya sea un sitio web audaz o una interfaz de app detallada, estamos acá para hacer brillar tus ideas.
          </p>
        </div>
        <div className="mission-footer">
          <p className="mission-brand">VIOPS TEAM</p>
        </div>
      </div>
    </div>
  )
}
