import { useEffect, useState, type CSSProperties } from 'react'
import { Logo } from '../components/Logo'
import { IconArrow } from '../components/Icons'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import { company, nav } from '../data/content'

const NAV_IDS = nav.map((n) => n.id)

export function Header() {
  const stuck = useScrolled(48)
  const active = useActiveSection(NAV_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  // блокируем прокрутку под открытым меню и закрываем его по Esc
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <>
      <header className={`header${stuck || menuOpen ? ' is-stuck' : ''}`}>
        <div className="shell header__inner">
          <Logo onClick={() => setMenuOpen(false)} />

          <nav className="header__nav" aria-label="Основная навигация">
            {nav.map((item) => (
              <a
                key={item.id}
                className={`header__link${active === item.id ? ' is-active' : ''}`}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__aside">
            <a className="header__phone" href={`tel:+${company.phoneRaw}`}>
              {company.phone}
            </a>
            <a className="btn header__btn" href="#contact">
              Консультация
              <IconArrow className="icon-line btn__arrow" />
            </a>
            <button
              type="button"
              className={`burger${menuOpen ? ' is-open' : ''}`}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`menu${menuOpen ? ' is-open' : ''}`}
        inert={!menuOpen}
      >
        <div />
        <nav className="menu__list" aria-label="Мобильная навигация">
          {nav.map((item, i) => (
            <div className="menu__item" key={item.id}>
              <a
                className="menu__link"
                href={`#${item.id}`}
                style={{ '--i': i } as CSSProperties}
                onClick={() => setMenuOpen(false)}
              >
                <span className="menu__num">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="menu__foot">
          <a className="menu__contact" href={`tel:+${company.phoneRaw}`}>
            {company.phone}
          </a>
          <a className="menu__contact" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <a
            className="btn"
            href={`https://wa.me/${company.phoneRaw}`}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setMenuOpen(false)}
          >
            Написать в WhatsApp
            <IconArrow className="icon-line btn__arrow" />
          </a>
        </div>
      </div>
    </>
  )
}
