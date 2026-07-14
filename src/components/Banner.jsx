import { useReveal } from '../hooks/useReveal'

export default function Banner() {
  const ref = useReveal()

  return (
    <div id="banner" className="banner reveal" ref={ref}>
      <div className="banner-img">
        <img src={`${import.meta.env.BASE_URL}imgs/banner.png`} alt="Banner" />
      </div>
    </div>
  )
}
