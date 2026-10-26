type Props = {
  /** показывать дескриптор под словесной частью */
  withTagline?: boolean
  onClick?: () => void
}

/** Фирменный лок-ап: знак «A» + словесная часть, набранная Cormorant Garamond. */
export function Logo({ withTagline = true, onClick }: Props) {
  return (
    <a className="logo" href="#hero" aria-label="Altum Legal — на главную" onClick={onClick}>
      <img
        className="logo__mark"
        src="/logo-mark.png"
        alt=""
        width={572}
        height={600}
        decoding="async"
      />
      <span className="logo__rule" aria-hidden="true" />
      <span className="logo__text">
        <span className="logo__word">ALTUM LEGAL</span>
        {withTagline && (
          <span className="logo__tagline">
            Правовая поддержка
            <br />
            вашего бизнеса
          </span>
        )}
      </span>
    </a>
  )
}
