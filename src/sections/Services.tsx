import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { IconArrow, serviceIcons } from '../components/Icons'
import { services } from '../data/content'

export function Services() {
  return (
    <section className="section section--dark" id="services">
      <div className="shell">
        <SectionHead
          index="02"
          label="Услуги"
          split
          title={
            <>
              Сопровождаем бизнес
              <br />
              на всех этапах развития
            </>
          }
          note="От создания компании до защиты интересов в сложных юридических вопросах. Шесть направлений, которые закрывают повседневные и стратегические задачи предпринимателя."
        />

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon]
            return (
              <Reveal className="service" key={service.num} delay={(i % 2) * 90}>
                <div className="service__top">
                  <span className="service__num">{service.num}</span>
                  <span className="service__icon">
                    <Icon />
                  </span>
                </div>

                <h3 className="service__title">{service.title}</h3>
                <p className="service__summary">{service.summary}</p>

                <ul className="service__list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <div className="services__note">
          <Reveal as="p" variant="up">
            У нас нет шаблонных решений — юридическое сопровождение подбираем
            под специфику вашего бизнеса.
          </Reveal>
          <Reveal delay={100}>
            <a className="btn" href="#contact">
              Обсудить задачу
              <IconArrow className="icon-line btn__arrow" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
