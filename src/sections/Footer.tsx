import { Reveal } from '../components/Reveal'
import { Logo } from '../components/Logo'
import { company, nav, services } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <Reveal className="footer__brand">
            <Logo className="logo--footer" />
            <p className="footer__tagline">
              Юридическая компания {company.cityIn}. Комплексное сопровождение
              бизнеса и защита интересов предпринимателей.
            </p>
          </Reveal>

          <Reveal className="footer__cols" delay={90}>
            <div className="footer__col">
              <h3 className="footer__col-title">Услуги</h3>
              <ul>
                {services.map((service) => (
                  <li key={service.num}>
                    <a href="#services">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Разделы</h3>
              <ul>
                {nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Контакты</h3>
              <ul>
                <li>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  <span>{company.workingHours}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {company.name}. Все права защищены.
          </span>
          <p>
            Информация на сайте носит справочный характер и не является публичной
            офертой.
          </p>
        </div>
      </div>
    </footer>
  )
}
