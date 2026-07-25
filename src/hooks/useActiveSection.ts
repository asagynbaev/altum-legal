import { useEffect, useState } from 'react'

/** Возвращает id секции, которая сейчас в фокусе внимания читателя. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        let best: string | null = null
        let bestRatio = 0
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }
        setActive(best)
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: '-20% 0px -45% 0px' },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [ids])

  return active
}
