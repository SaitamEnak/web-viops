import { useReveal } from '../hooks/useReveal'

export default function Banner() {
  const ref = useReveal()

  return (
    <div id="banner" className="banner reveal" ref={ref}>
      <div className="banner-img">
        <img src="/imgs/banner.png" alt="Banner" />
      </div>
    </div>
  )
}
