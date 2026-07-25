import { Reveal } from '../components/Reveal'
import { advantages } from '../data/content'

export function Advantages() {
  return (
    <section className="section section--warm" id="advantages">
      <div className="shell advantages__layout">
        <div className="advantages__aside">
          <Reveal className="section-head__top" style={{ marginBottom: '1.5rem' }}>
            <span className="overline">Преимущества</span>
            <span className="section-head__index">03</span>
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={80}>
            Почему бизнес выбирает Altum Legal
          </Reveal>
        </div>

        <div className="advantages__list">
          {advantages.map((item, i) => (
            <Reveal className="advantage" key={item.title} delay={i * 70}>
              <span className="advantage__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="advantage__title">{item.title}</h3>
                <p className="advantage__text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
