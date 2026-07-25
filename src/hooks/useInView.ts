import { useEffect, useRef, useState } from 'react'

type Options = {
  threshold?: number
  rootMargin?: string
  /** false — элемент снова скрывается, когда уходит из вьюпорта */
  once?: boolean
}

/** Отслеживает появление элемента во вьюпорте для анимаций при скролле. */
export function useInView<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
