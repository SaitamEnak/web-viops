import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Gift } from 'lucide-react'

export default function Nav({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.getElementById(id)
    if (!target) return
    const rect = target.getBoundingClientRect()
    const absoluteTop = rect.top + window.scrollY
    const top = absoluteTop - (window.innerHeight - rect.height) / 2
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }

  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e) => {
      if (!e.target.closest('.top-nav')) setIsOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isOpen])

  return (
    <nav className="top-nav">
      <img className="nav-logo" src={`${import.meta.env.BASE_URL}logo header.svg`} alt="Ovus" />

      <div className={`nav-pill nav-center${isOpen ? ' open' : ''}`}>
        <a href="#quote" className="nav-link" onClick={(e) => handleNavClick(e, 'quote')}>Nosotros</a>
        <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>Servicios</a>
        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contacto</a>
        <a href="#faqs" className="nav-link" onClick={(e) => handleNavClick(e, 'faqs')}>FAQs</a>
      </div>

      <div className="nav-actions">
        <div className="nav-pill nav-gift">
          <button
            className="gift-btn"
            onClick={(e) => handleNavClick(e, 'resources')}
            aria-label="Ebook gratuito"
          >
            <Gift size={20} />
            <span className="gift-dot" aria-hidden="true" />
          </button>
        </div>

        <div className="nav-pill nav-right">
          <button className="theme-switch" onClick={toggleTheme} aria-label="Cambiar tema">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="menu-btn"
            onClick={() => setIsOpen(o => !o)}
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
