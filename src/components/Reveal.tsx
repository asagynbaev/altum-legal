import {
  createElement,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { useInView } from '../hooks/useInView'

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  /** up — сдвиг снизу, mask — раскрытие маской, rule — прочерк линии */
  variant?: 'up' | 'mask' | 'rule'
  delay?: number
  threshold?: number
  children?: ReactNode
}

/** Обёртка, включающая анимацию появления, когда блок входит во вьюпорт. */
export function Reveal({
  as: Tag = 'div' as ElementType,
  variant = 'up',
  delay = 0,
  threshold,
  className = '',
  style,
  children,
  ...rest
}: Props) {
  const { ref, inView } = useInView<HTMLElement>({ threshold })

  const classes = [
    'reveal',
    variant !== 'up' && `reveal--${variant}`,
    inView && 'is-in',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return createElement(
    Tag,
    {
      ref,
      className: classes,
      style: { ...style, '--reveal-delay': `${delay}ms` } as CSSProperties,
      ...rest,
    },
    children,
  )
}
