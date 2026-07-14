import { useState, useEffect } from 'react'

const IMAGES = [
  { src: '/imgs/slider/Emprepedia01.png', alt: 'Emprepedia 01' },
  { src: '/imgs/slider/Emprepedia02.png', alt: 'Emprepedia 02' },
  { src: '/imgs/slider/Freelance01.png', alt: 'Freelance 01' },
  { src: '/imgs/slider/Freelance02.png', alt: 'Freelance 02' },
  { src: '/imgs/slider/Freelance03.png', alt: 'Freelance 03' },
  { src: '/imgs/slider/Freelance04.png', alt: 'Freelance 04' },
  { src: '/imgs/slider/Freelance05.png', alt: 'Freelance 05' },
  { src: '/imgs/slider/Freelance06.png', alt: 'Freelance 06' },
  { src: '/imgs/slider/JohannaOtranto01.png', alt: 'Johanna Otranto 01' },
  { src: '/imgs/slider/JohannaOtranto02.png', alt: 'Johanna Otranto 02' },
  { src: '/imgs/slider/JohannaOtranto03.png', alt: 'Johanna Otranto 03' },
  { src: '/imgs/slider/JohannaOtranto04.png', alt: 'Johanna Otranto 04' },
  { src: '/imgs/slider/JohannaOtranto05.png', alt: 'Johanna Otranto 05' },
  { src: '/imgs/slider/redim01.png', alt: 'Redim 01' },
  { src: '/imgs/slider/redim02.png', alt: 'Redim 02' },
  { src: '/imgs/slider/redim03.png', alt: 'Redim 03' },
  { src: '/imgs/slider/redim04.png', alt: 'Redim 04' },
  { src: '/imgs/slider/sinner01.png', alt: 'Sinner 01' },
  { src: '/imgs/slider/sinner02.png', alt: 'Sinner 02' },
  { src: '/imgs/slider/sinner03.png', alt: 'Sinner 03' },
  { src: '/imgs/slider/sinner04.png', alt: 'Sinner 04' },
  { src: '/imgs/slider/sinner05.png', alt: 'Sinner 05' },
  { src: '/imgs/slider/sinner06.png', alt: 'Sinner 06' },
  { src: '/imgs/slider/sinner07.png', alt: 'Sinner 07' },
  { src: '/imgs/slider/sinner08.png', alt: 'Sinner 08' },
  { src: '/imgs/slider/Viops01.png', alt: 'Viops 01' },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Gallery() {
  const [images, setImages] = useState(IMAGES)

  useEffect(() => {
    setImages(shuffle(IMAGES))
  }, [])

  // 240px image + 16px margin-right per item, ×2 sets for seamless loop
  const slidesWidth = `${256 * images.length * 2}px`

  return (
    <div id="gallery" className="Gallery">
      <div className="slider">
        <div className="slides" style={{ width: slidesWidth }}>
          {images.map((img, i) => (
            <img key={`a-${i}`} src={img.src} alt={img.alt} />
          ))}
          {images.map((img, i) => (
            <img key={`b-${i}`} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}
