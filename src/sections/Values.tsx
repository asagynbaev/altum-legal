import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { values } from '../data/content'

export function Values() {
  return (
    <section className="section section--light-shade" id="values">
      <div className="shell">
        <SectionHead
          index="05"
          label="Ценности"
          split
          title="Пять принципов, на которых держится работа"
          note="Они определяют, как мы ведём дела партнёров каждый день — от первого звонка до сопровождения на постоянной основе."
        />

        <div className="values__grid">
          {values.map((value, i) => (
            <Reveal className="value" key={value.title} delay={i * 60}>
              <span className="value__mark" aria-hidden="true" />
              <h3 className="value__title">{value.title}</h3>
              <p className="value__text">{value.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
