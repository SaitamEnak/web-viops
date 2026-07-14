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
            No seguimos procesos rígidos. Trabajamos con un método flexible diseñado para movernos rápido, lanzar pronto y mejorar continuamente. Porque un sitio web o producto nunca se "hace" una sola vez.<br /><br />
            Se construye, se prueba, se mide y se refina con el tiempo. Por eso trabajamos con personas que ven el diseño como una inversión, no como decoración.
          </p>
        </div>
        <div className="mission-footer">
          <p className="mission-brand">VIOPS TEAM</p>
        </div>
      </div>
    </div>
  )
}
