import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Ticker } from './sections/Ticker'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Advantages } from './sections/Advantages'
import { Process } from './sections/Process'
import { Values } from './sections/Values'
import { Pricing } from './sections/Pricing'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержанию
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Advantages />
        <Process />
        <Values />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <div className="grain" aria-hidden="true" />
    </>
  )
}
