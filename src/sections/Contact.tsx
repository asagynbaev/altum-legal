import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import {
  IconArrow,
  IconCheckSeal,
  IconChevron,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from '../components/Icons'
import { company, formTopics } from '../data/content'

type Errors = Partial<Record<'name' | 'phone', string>>

const initial = {
  name: '',
  phone: '',
  topic: formTopics[0] as string,
  message: '',
}

export function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const set = (key: keyof typeof initial, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (form.name.trim().length < 2) next.name = 'Укажите, как к вам обращаться'
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 9) next.phone = 'Введите номер телефона для связи'
    return next
  }

  const composeText = () =>
    [
      'Заявка с сайта Altum Legal',
      `Имя: ${form.name.trim()}`,
      `Телефон: ${form.phone.trim()}`,
      `Тема: ${form.topic}`,
      form.message.trim() && `Вопрос: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return

    window.open(
      `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(composeText())}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  const sendByMail = () => {
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Заявка с сайта — ${form.topic}`,
    )}&body=${encodeURIComponent(composeText())}`
    setSent(true)
  }

  return (
    <section className="section section--light" id="contact">
      <div className="shell">
        <SectionHead
          index="07"
          label="Контакты"
          split
          title={
            <>
              Расскажите о задаче —
              <br />
              предложим решение
            </>
          }
          note="Опишите ситуацию в двух словах. Юрист свяжется с вами, задаст уточняющие вопросы и предложит варианты действий."
        />

        <div className="contact__layout">
          <div>
            <div className="contact__lines">
              <a className="contact__line" href={`tel:+${company.phoneRaw}`}>
                <IconPhone className="icon-line contact__icon" />
                <span>
                  <span className="contact__line-label">Телефон</span>
                  <span className="contact__line-value">{company.phone}</span>
                </span>
              </a>

              <a className="contact__line" href={`mailto:${company.email}`}>
                <IconMail className="icon-line contact__icon" />
                <span>
                  <span className="contact__line-label">Электронная почта</span>
                  <span className="contact__line-value">{company.email}</span>
                </span>
              </a>

              <div className="contact__line">
                <IconPin className="icon-line contact__icon" />
                <span>
                  <span className="contact__line-label">Город</span>
                  <span className="contact__line-value">
                    {company.city}, Кыргызская Республика
                  </span>
                </span>
              </div>

              <div className="contact__line">
                <IconClock className="icon-line contact__icon" />
                <span>
                  <span className="contact__line-label">Часы работы</span>
                  <span className="contact__line-value">{company.workingHours}</span>
                </span>
              </div>
            </div>

            <div className="contact__cta">
              <a
                className="btn"
                href={`https://wa.me/${company.phoneRaw}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconWhatsApp width={16} height={16} />
                Написать в WhatsApp
              </a>
              <a className="btn btn--ghost" href={`tel:+${company.phoneRaw}`}>
                Позвонить
              </a>
            </div>
          </div>

          <Reveal className="contact__form" as="div" delay={120}>
            {sent ? (
              <div className="contact__sent">
                <IconCheckSeal className="icon-line contact__sent-mark" />
                <h3 className="contact__form-title">Заявка сформирована</h3>
                <p className="contact__form-note">
                  Мы открыли окно отправки. Если оно не появилось — напишите нам
                  напрямую на {company.email} или позвоните по номеру{' '}
                  {company.phone}.
                </p>
                <button
                  type="button"
                  className="link-underline"
                  onClick={() => {
                    setForm(initial)
                    setSent(false)
                  }}
                >
                  Отправить ещё одну заявку
                  <IconArrow className="icon-line" />
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="contact__form-title">Оставить заявку</h3>

                <div className="contact__row">
                  <label
                    className={`field${errors.name ? ' field--invalid' : ''}`}
                  >
                    <input
                      className="field__input"
                      type="text"
                      name="name"
                      placeholder=" "
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                    />
                    <span className="field__label">Ваше имя</span>
                    {errors.name && (
                      <span className="field__error">{errors.name}</span>
                    )}
                  </label>

                  <label
                    className={`field${errors.phone ? ' field--invalid' : ''}`}
                  >
                    <input
                      className="field__input"
                      type="tel"
                      name="phone"
                      placeholder=" "
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    <span className="field__label">Телефон</span>
                    {errors.phone && (
                      <span className="field__error">{errors.phone}</span>
                    )}
                  </label>
                </div>

                <label className="field field--filled">
                  <select
                    className="field__select"
                    name="topic"
                    value={form.topic}
                    onChange={(e) => set('topic', e.target.value)}
                  >
                    {formTopics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                  <span className="field__label">Тема обращения</span>
                  <IconChevron className="icon-line field__chevron" />
                </label>

                <label className="field">
                  <textarea
                    className="field__textarea"
                    name="message"
                    rows={3}
                    placeholder=" "
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                  />
                  <span className="field__label">Кратко о задаче</span>
                </label>

                <button className="btn btn--block" type="submit">
                  Отправить в WhatsApp
                  <IconArrow className="icon-line btn__arrow" />
                </button>

                <p className="contact__form-note">
                  Заявка уходит напрямую юристу в WhatsApp. Предпочитаете почту —{' '}
                  <button type="button" className="text-link" onClick={sendByMail}>
                    отправьте письмом
                  </button>
                  . Нажимая кнопку, вы соглашаетесь на обработку указанных данных
                  для ответа на обращение. Всё, что вы расскажете,
                  конфиденциально.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
