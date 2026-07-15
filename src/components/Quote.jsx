import { useReveal } from '../hooks/useReveal'

export default function Quote() {
  const ref = useReveal()

  return (
    <div id="quote" className="quote reveal" ref={ref}>
      <div className="badge">
        <p>Sobre nosotros</p>
      </div>
      <h2 className="quote-lead">
        <span>Somos un pequeño equipo de diseño y desarrollo </span>
        <span className="quote-lead-dim">apasionado por crear soluciones digitales centradas en el usuario.</span>
      </h2>
      <p className="quote-sub">
        Ya sea un sitio web audaz o una interfaz de app detallada,<br />
        estamos acá para hacer brillar tus ideas.
      </p>
    </div>
  )
}
