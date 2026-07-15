import { User, Laptop, Building2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function WorkWith() {
  const ref = useReveal()

  return (
    <div id="work" className="work-with reveal" ref={ref}>
      <div className="section-header">
        <div className="badge">
          <p>Nuestros clientes</p>
        </div>
        <h2 className="section-title">¿Con quién trabajamos?</h2>
        <p className="section-subtitle">
          Trabajamos con quienes entienden que un buen producto digital no es un gasto, es una ventaja competitiva.
        </p>
      </div>
      <div className="work-grid">
        <div className="work-item">
          <div className="work-icon">
            <User size={32} />
          </div>
          <div className="work-text">
            <p className="work-item-title">Emprendedores</p>
            <p className="work-item-desc">Visionarios que buscan convertir ideas en productos digitales reales y escalables.</p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-icon">
            <Laptop size={32} />
          </div>
          <div className="work-text">
            <p className="work-item-title">Startups</p>
            <p className="work-item-desc">Equipos ágiles que necesitan MVPs escalables y ciclos de iteración rápidos.</p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-icon">
            <Building2 size={32} />
          </div>
          <div className="work-text">
            <p className="work-item-title">Empresas</p>
            <p className="work-item-desc">Negocios establecidos que buscan modernizar sus operaciones.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
