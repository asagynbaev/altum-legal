import { IconWhatsApp } from './Icons'
import { useScrolled } from '../hooks/useScrolled'
import { company } from '../data/content'

/** Быстрая кнопка связи — появляется, когда первый экран уже пролистан. */
export function FloatingWhatsApp() {
  const visible = useScrolled(680)

  return (
    <a
      className={`floating-wa${visible ? ' is-visible' : ''}`}
      href={`https://wa.me/${company.phoneRaw}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Написать в WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <IconWhatsApp />
    </a>
  )
}
