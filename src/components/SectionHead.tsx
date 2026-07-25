import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  index: string
  label: string
  title: ReactNode
  note?: ReactNode
  /** разложить заголовок и подводку в две колонки */
  split?: boolean
}

export function SectionHead({ index, label, title, note, split = false }: Props) {
  return (
    <header className={`section-head${split ? ' section-head--split' : ''}`}>
      <Reveal className="section-head__top">
        <span className="overline">{label}</span>
        <span className="section-head__index">{index}</span>
      </Reveal>

      <div className="section-head__body">
        <Reveal as="h2" className="section-head__title" delay={80}>
          {title}
        </Reveal>
        {note && (
          <Reveal as="p" className="section-head__note" delay={160}>
            {note}
          </Reveal>
        )}
      </div>
    </header>
  )
}
