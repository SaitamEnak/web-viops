import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Nav({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.getElementById(id)
    if (!target) return
    const nav = document.querySelector('.top-nav')
    const offset = (nav?.getBoundingClientRect().height ?? 0) + 32
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
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
        <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>Servicios</a>
        <a href="#quote" className="nav-link" onClick={(e) => handleNavClick(e, 'quote')}>Nosotros</a>
        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contacto</a>
        <a href="#faqs" className="nav-link" onClick={(e) => handleNavClick(e, 'faqs')}>FAQs</a>
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
    </nav>
  )
}
