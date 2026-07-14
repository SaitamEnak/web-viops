import { Globe, Rocket, Workflow } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

const items = [
  {
    number: '(001)',
    image: `${BASE}imgs/whatwedo/webdesign.png`,
    Icon: Globe,
    title: 'Diseño Web',
    desc: 'Sitios modernos, responsivos y centrados en el usuario, diseñados para atraer visitantes y generar conversiones.',
    categories: ['Landing pages', 'E-commerce', 'Corporativos', 'Ventas', 'Portafolios'],
  },
  {
    number: '(002)',
    image: `${BASE}imgs/whatwedo/mvpdevelopment.png`,
    Icon: Rocket,
    title: 'Desarrollo de MVP',
    desc: 'Aplicaciones personalizadas construidas para validar tu idea rápido y escalar con las necesidades de tu negocio.',
    categories: ['Marketplaces', 'SaaS', 'Reservas', 'Delivery', 'Gestión'],
  },
  {
    number: '(003)',
    image: `${BASE}imgs/whatwedo/processautomation.png`,
    Icon: Workflow,
    title: 'Automatización de procesos',
    desc: 'Agentes de IA y flujos automatizados que simplifican tareas repetitivas y liberan tiempo de tu equipo.',
    categories: ['Atención al cliente', 'Ventas y CRM', 'Facturación', 'Reportes', 'Onboarding'],
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <div id="services" className="services reveal" ref={ref}>
      <div className="services-header">
        <div className="badge">
          <p>Nuestros Servicios</p>
        </div>
        <p className="services-title">¿Qué hacemos?</p>
        <p className="services-subtitle">
          Ayudamos a las marcas a lanzarse rápido, validar ideas y evolucionar sus productos a lo largo del tiempo mediante diseño, iteración y mejora continua.
        </p>
      </div>
      <ul className="services-list">
        {items.map(({ number, image, Icon, title, desc, categories }) => (
          <li className="service-row" key={number}>
            <span className="service-number">{number}</span>
            <div className="service-thumb">
              <img src={image} alt={title} className="service-thumb-bg" />
              <div className="service-thumb-icon">
                <Icon size={28} />
              </div>
            </div>
            <div className="service-text">
              <p className="service-title">{title}</p>
              <p className="service-desc">{desc}</p>
            </div>
            <div className="service-cats">
              <p className="service-cats-label">Casos de uso</p>
              <div className="service-cats-list">
                {categories.map((c) => (
                  <span className="service-pill" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
