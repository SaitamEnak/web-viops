import { useReveal } from '../hooks/useReveal'

export default function Quote() {
  const ref = useReveal()

  return (
    <div id="quote" className="quote reveal" ref={ref}>
      <p>
        No seguimos procesos rígidos. Trabajamos con un método flexible diseñado para movernos rápido, lanzar pronto y mejorar continuamente. Porque un sitio web o producto nunca se “hace” una sola vez.
        <br /><br />
        Se construye, se prueba, se mide y se refina con el tiempo. Por eso trabajamos con personas que ven el diseño como una inversión, no como decoración.
      </p>
    </div>
  )
}
