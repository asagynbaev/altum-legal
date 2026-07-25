import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Reveal } from '../components/Reveal'
import { IconArrow } from '../components/Icons'
import { useInView } from '../hooks/useInView'
import { process } from '../data/content'

export function Process() {
  const stepsRef = useRef<HTMLDivElement>(null)

  // золотая линия «прорастает» вместе с прокруткой блока
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start 72%', 'end 65%'],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    mass: 0.35,
  })

  return (
    <section className="section section--light" id="process">
      <div className="shell process__layout">
        <div className="process__aside">
          <Reveal className="section-head__top" style={{ marginBottom: '1.5rem' }}>
            <span className="overline">Как мы работаем</span>
            <span className="section-head__index">04</span>
          </Reveal>
          <Reveal as="h2" className="section-head__title" delay={80}>
            Прозрачный процесс
            <br />
            от заявки до результата
          </Reveal>
          <Reveal as="p" className="section-head__note" delay={150} style={{ marginTop: '1.25rem' }}>
            Каждый этап выстроен так, чтобы партнёр чувствовал уверенность,
            прозрачность и контроль над процессом.
          </Reveal>
          <Reveal delay={220} style={{ marginTop: '2rem' }}>
            <a className="btn btn--ghost" href="#contact">
              Оставить заявку
              <IconArrow className="icon-line btn__arrow" />
            </a>
          </Reveal>
        </div>

        <div className="process__steps" ref={stepsRef}>
          <div className="process__rail" aria-hidden="true">
            <motion.div className="process__rail-fill" style={{ scaleY }} />
          </div>

          <ol>
            {process.map((step, i) => (
              <Step key={step.title} index={i} title={step.title} text={step.text} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Step({ index, title, text }: { index: number; title: string; text: string }) {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.4 })

  return (
    <li className={`step${inView ? ' is-in' : ''}`} ref={ref}>
      <span className="step__dot" aria-hidden="true" />
      <Reveal>
        <span className="step__num">Этап {String(index + 1).padStart(2, '0')}</span>
        <h3 className="step__title">{title}</h3>
        <p className="step__text">{text}</p>
      </Reveal>
    </li>
  )
}
