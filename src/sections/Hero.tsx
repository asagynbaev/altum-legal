import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { IconArrow } from '../components/Icons'
import { company } from '../data/content'

const TITLE_LINES = [
  <>Правовая поддержка</>,
  <>
    <em>вашего</em> бизнеса
  </>,
]

export function Hero() {
  const [ready, setReady] = useState(false)
  const watermark = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // мягкий параллакс знака «A» на фоне
  useEffect(() => {
    const el = watermark.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY, 900) * 0.11
        el.style.transform = `translate3d(0, ${shift}px, 0)`
        frame = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className={`hero${ready ? ' is-ready' : ''}`} id="hero">
      <div className="hero__slats" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <img
        ref={watermark}
        className="hero__watermark"
        src="/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={572}
        height={600}
        fetchPriority="high"
      />

      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="overline hero__anim" style={anim(0)}>
            Юридическая компания · {company.city}
          </p>

          <h1 className="hero__title">
            {TITLE_LINES.map((line, i) => (
              <span className="hero__line" key={i}>
                <span className="hero__anim" style={anim(120 + i * 90)}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero__actions hero__anim" style={anim(660)}>
            <a className="btn" href="#contact">
              Получить консультацию
              <IconArrow className="icon-line btn__arrow" />
            </a>
            <a className="btn btn--ghost" href="#services">
              Услуги и стоимость
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function anim(delay: number): CSSProperties {
  return { '--d': `${delay}ms` } as CSSProperties
}
