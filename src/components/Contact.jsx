import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <div id="contact" className="contact reveal" ref={ref}>
      <p className="contact-email">contact@viops.com</p>
      <p className="contact-bg">¡Contáctanos!</p>
    </div>
  )
}
