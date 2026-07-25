import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { about } from '../data/content'

export function About() {
  return (
    <section className="section section--light" id="about">
      <div className="shell">
        <SectionHead
          index="01"
          label="О компании"
          title={
            <>
              Ваш юридический партнёр,
              <br />
              а не подрядчик на разовую задачу
            </>
          }
        />

        <div className="about__grid">
          <div>
            <Reveal as="p" className="about__lead">
              {about.lead}
            </Reveal>

            <div className="about__body">
              {about.paragraphs.map((text, i) => (
                <Reveal as="p" key={i} delay={90 + i * 70}>
                  {text}
                </Reveal>
              ))}
            </div>

            <Reveal as="blockquote" className="about__quote" delay={120}>
              {about.pullquote}
            </Reveal>
          </div>

          <Reveal className="about__cards" delay={140}>
            {about.cards.map((card) => (
              <article className="about__card" key={card.key}>
                <span className="overline overline--plain">{card.title}</span>
                <h3>
                  {card.key === 'mission'
                    ? 'Безопасная правовая среда'
                    : 'Один из лидеров Центральной Азии'}
                </h3>
                <p>{card.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
