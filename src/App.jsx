import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Resources from './components/Resources'
import Mission from './components/Mission'
import Quote from './components/Quote'
import WorkWith from './components/WorkWith'
import FAQs from './components/FAQs'
import Contact from './components/Contact'

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <>
      <Nav isDark={isDark} toggleTheme={() => setIsDark(d => !d)} />
      <div className="desktop">
        <Hero />
        <Services />
        <Resources />
        {/* <Mission /> */}
        <Quote />
        <WorkWith />
        <Contact />
        <FAQs />
      </div>
    </>
  )
}

export default App
