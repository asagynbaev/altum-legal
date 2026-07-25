import { ticker } from '../data/content'

/** Бегущая строка направлений практики — приём из фирменной полиграфии. */
export function Ticker() {
  const group = (
    <div className="ticker__group" aria-hidden="true">
      {ticker.map((item) => (
        <span className="ticker__item" key={item}>
          {item}
          <span className="ticker__dot" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="ticker">
      <p className="visually-hidden">
        Направления практики: {ticker.join(', ')}.
      </p>
      <div className="ticker__track">
        {group}
        {group}
      </div>
    </div>
  )
}
