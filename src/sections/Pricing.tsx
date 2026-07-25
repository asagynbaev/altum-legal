import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { IconArrow } from '../components/Icons'
import { pricingPlans, priceTables } from '../data/content'

export function Pricing() {
  return (
    <section className="section section--dark" id="pricing">
      <div className="shell">
        <SectionHead
          index="06"
          label="Стоимость"
          split
          title={
            <>
              Юридический аутсорсинг
              <br />и разовые услуги
            </>
          }
          note="Абонентское обслуживание заменяет штатного юриста и обходится дешевле. Разовые задачи считаем по прозрачному прайсу — без скрытых позиций."
        />

        <div className="plans">
          {pricingPlans.map((plan, i) => (
            <Reveal
              className={`plan${plan.featured ? ' plan--featured' : ''}`}
              key={plan.name}
              delay={i * 90}
            >
              {plan.featured && <span className="plan__badge">Чаще выбирают</span>}
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__price">
                <b>{plan.price}</b>
                <span className="plan__period">{plan.period}</span>
              </p>
              <ul className="plan__items">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="tables">
          {priceTables.map((table, i) => (
            <Reveal className="price-table" key={table.title} delay={i * 90}>
              <div className="price-table__head">
                <h3 className="price-table__title">{table.title}</h3>
                <span className="price-table__unit">{table.unit}</span>
              </div>
              <dl>
                {table.rows.map(([name, value]) => (
                  <div className="price-table__row" key={name}>
                    <dt className="price-table__name">{name}</dt>
                    <dd className="price-table__value">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        <Reveal className="pricing__disclaimer">
          <p>
            * Итоговая стоимость зависит от специфики бизнеса, объёма документов
            и сроков. Личные вопросы сотрудников в абонентское обслуживание не
            входят.
          </p>
          <p>
            ** Стоимость представительства в суде и государственных органах
            определяется индивидуально. Мы гарантируем обратную связь и
            стратегическую работу по делу.
          </p>
        </Reveal>

        <Reveal className="services__note" delay={80}>
          <p>Подберём формат сопровождения под ваш объём задач и бюджет.</p>
          <a className="btn" href="#contact">
            Рассчитать стоимость
            <IconArrow className="icon-line btn__arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
