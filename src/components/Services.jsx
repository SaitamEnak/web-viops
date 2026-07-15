import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Globe, Rocket, Workflow } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

const items = [
  {
    id: 'web',
    number: '(001)',
    image: `${BASE}imgs/whatwedo/webdesign.png`,
    Icon: Globe,
    title: 'Diseño Web',
    desc: 'Diseñamos sitios web visualmente atractivos y centrados en el usuario, combinando creatividad con funcionalidad desde cero.',
    price: '$250k ARS',
    timeline: '2 – 4 Semanas',
    categories: ['Landing pages', 'E-commerce', 'Shopify', 'Corporativos', 'Ventas', 'Portafolios'],
  },
  {
    id: 'apps',
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
    id: 'auto',
    number: '(003)',
    image: `${BASE}imgs/whatwedo/processautomation.png`,
    Icon: Workflow,
    title: 'Automatizaciones',
    desc: 'Agentes de IA y flujos automatizados que simplifican tareas repetitivas y liberan tiempo de tu equipo.',
    price: '$650k ARS',
    timeline: '2 – 4 Semanas',
    categories: ['Atención al cliente', 'Ventas y CRM', 'Facturación', 'Reportes', 'Onboarding'],
  },
]

export default function Services() {
  const ref = useReveal()
  const [activeId, setActiveId] = useState(items[0].id)
  const activeIndex = Math.max(0, items.findIndex((i) => i.id === activeId))
  const active = items[activeIndex]
  const { image, Icon, title, desc, price, timeline, categories } = active
  const currentIndex = String(activeIndex + 1).padStart(2, '0')
  const totalCount = String(items.length).padStart(2, '0')

  const tabsRef = useRef(null)
  const labelRefs = useRef({})
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const measureLabels = () => {
    Object.entries(labelRefs.current).forEach(([, el]) => {
      if (el) el.style.setProperty('--label-w', `${el.scrollWidth}px`)
    })
  }

  useLayoutEffect(() => {
    measureLabels()
  }, [])

  const measureIndicator = () => {
    const container = tabsRef.current
    if (!container) return
    const btn = container.querySelector('.services-tab.active')
    if (!btn) return
    setIndicatorStyle({
      left: btn.offsetLeft,
      width: btn.offsetWidth,
      opacity: 1,
    })
  }

  useLayoutEffect(() => {
    measureIndicator()
  }, [activeId])

  useEffect(() => {
    window.addEventListener('resize', measureIndicator)
    return () => window.removeEventListener('resize', measureIndicator)
  }, [])

  useEffect(() => {
    const container = tabsRef.current
    if (!container || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => measureIndicator())
    container.querySelectorAll('.services-tab').forEach((el) => ro.observe(el))
    return () => ro.disconnect()
  }, [])

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

      <div className="services-card">
        <div className="services-tabs" role="tablist" aria-label="Servicios" ref={tabsRef}>
          <span className="services-tab-indicator" style={indicatorStyle} aria-hidden="true" />
          {items.map(({ id, title, Icon: TabIcon }) => {
            const isActive = id === activeId
            return (
              <button
                key={id}
                role="tab"
                aria-selected={isActive}
                className={`services-tab${isActive ? ' active' : ''}`}
                onClick={() => setActiveId(id)}
              >
                <TabIcon size={16} />
                <span
                  ref={(el) => { labelRefs.current[id] = el }}
                  className="services-tab-label"
                >
                  {title}
                </span>
              </button>
            )
          })}
        </div>

        <div className="service-panel" role="tabpanel" key={activeId}>
          <h3 className="service-lead-title" lang="es">{title}</h3>

          <div className="service-col service-col-lead">
            <p className="service-lead-desc">{desc}</p>
            <div className="service-lead-bottom">
              <div className="service-lead-divider" />
              <div className="service-index">
                <span>{currentIndex}</span>
                <span className="service-index-total"> / {totalCount}</span>
              </div>
            </div>
          </div>

          <div className="service-col service-col-thumb">
            <div className="service-image-wrap">
              <img src={image} alt={title} className="service-image" />
              <div className="service-thumb-icon">
                <Icon size={28} />
              </div>
            </div>
          </div>

          <div className="service-col service-col-meta">
            <div className="service-meta-pair">
              <div className="service-meta-block">
                <span className="service-meta-label">Precio desde</span>
                <span className="service-meta-value">{price}</span>
              </div>
              <div className="service-meta-block">
                <span className="service-meta-label">Duración</span>
                <span className="service-meta-value">{timeline}</span>
              </div>
            </div>
            <div className="service-meta-block">
              <span className="service-meta-label">Servicios</span>
              <ul className="service-meta-list">
                {categories.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
