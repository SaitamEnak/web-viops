import { Globe, Rocket, Workflow } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

const items = [
  {
    number: '(001)',
    image: `${BASE}imgs/whatwedo/webdesign.png`,
    Icon: Globe,
    title: 'Diseño Web',
    desc: 'Diseñamos sitios web visualmente atractivos y centrados en el usuario, combinando creatividad con funcionalidad desde cero.',
    price: '$250k ARS',
    timeline: '2 – 4 Semanas',
    categories: ['Landing pages', 'E-commerce', 'Corporativos', 'Ventas', 'Portafolios'],
  },
  {
    number: '(002)',
    image: `${BASE}imgs/whatwedo/mvpdevelopment.png`,
    Icon: Rocket,
    title: 'Web Apps',
    desc: 'Aplicaciones personalizadas construidas para validar tu idea rápido y escalar con las necesidades de tu negocio.',
    price: '$500k ARS',
    timeline: '4 – 6 Semanas',
    categories: ['Marketplaces', 'SaaS', 'Reservas', 'Delivery', 'Gestión'],
  },
  {
    number: '(003)',
    image: `${BASE}imgs/whatwedo/processautomation.png`,
    Icon: Workflow,
    title: 'Automatización',
    desc: 'Agentes de IA y flujos automatizados que simplifican tareas repetitivas y liberan tiempo de tu equipo.',
    price: '$650k ARS',
    timeline: '2 – 4 Semanas',
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
        {items.map(({ number, image, Icon, title, desc, price, timeline, categories }) => (
          <li className="service-row" key={title}>
            <span className="service-name">{number}</span>
            <div className="service-image-wrap">
              <img src={image} alt={title} className="service-image" />
              <div className="service-thumb-icon">
                <Icon size={28} />
              </div>
            </div>
            <div className="service-info">
              <p className="service-info-title">{title}</p>
              <p className="service-desc">{desc}</p>
              <div className="service-meta">
                <div className="service-meta-row">
                  <span className="service-meta-label">Precio desde</span>
                  <span className="service-meta-value">{price}</span>
                </div>
                <div className="service-meta-row">
                  <span className="service-meta-label">Duración</span>
                  <span className="service-meta-value">{timeline}</span>
                </div>
              </div>
            </div>
            <div className="service-pills-row">
              {categories.map((c) => (
                <span className="service-pill" key={c}>{c}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
