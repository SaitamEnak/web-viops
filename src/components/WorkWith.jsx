import { User, Laptop, Building2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function WorkWith() {
  const ref = useReveal()

  return (
    <div id="work" className="work-with reveal" ref={ref}>
      <div className="work-header">
        <p className="work-title">¿Con quién trabajamos?</p>
        <p className="work-subtitle">
          Trabajamos con personas que entienden el valor estratégico del diseño, tratándolo como una herramienta de crecimiento y una inversión a largo plazo, no como decoración o algo secundario.
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
