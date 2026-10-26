import type { SVGProps } from 'react'

/**
 * Тонкие линейные иконки, нарисованные в стиле фирменного набора Altum Legal.
 * Обводка наследует currentColor, толщина задаётся классом .icon-line.
 */

type IconProps = SVGProps<SVGSVGElement>

const box = (props: IconProps) => ({
  viewBox: '0 0 24 24',
  className: 'icon-line',
  'aria-hidden': true,
  focusable: false as const,
  ...props,
})

export const IconBriefcase = (p: IconProps) => (
  <svg {...box(p)}>
    <rect x="2.4" y="7.2" width="19.2" height="13" rx="1.2" />
    <path d="M8.4 7.2V5.4A1.6 1.6 0 0 1 10 3.8h4a1.6 1.6 0 0 1 1.6 1.6v1.8" />
    <path d="M2.4 12.4h19.2M10.2 12.4v2.2h3.6v-2.2" />
  </svg>
)

export const IconDocument = (p: IconProps) => (
  <svg {...box(p)}>
    <path d="M14.2 2.8H6.6A1.8 1.8 0 0 0 4.8 4.6v14.8a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8V7.6z" />
    <path d="M14.2 2.8v4.8h5" />
    <path d="M8.4 12.4h7.2M8.4 15.6h7.2M8.4 9.2h2.8" />
  </svg>
)

export const IconPeople = (p: IconProps) => (
  <svg {...box(p)}>
    <circle cx="9.4" cy="8" r="3.2" />
    <path d="M3.4 20.2v-1.4a4.6 4.6 0 0 1 4.6-4.6h2.8a4.6 4.6 0 0 1 4.6 4.6v1.4" />
    <path d="M16.2 5.2a3.2 3.2 0 0 1 0 5.9" />
    <path d="M17.6 14.4a4.6 4.6 0 0 1 3 4.4v1.4" />
  </svg>
)

export const IconScales = (p: IconProps) => (
  <svg {...box(p)}>
    <path d="M12 4.2v16M8.2 20.2h7.6" />
    <path d="M4 7.6 12 5.6l8 2" />
    <circle cx="12" cy="4.2" r="1.3" />
    <path d="M4 7.8 1.4 13.4a2.9 2.9 0 0 0 5.2 0z" />
    <path d="M20 7.8l-2.6 5.6a2.9 2.9 0 0 0 5.2 0z" />
  </svg>
)

export const IconDialog = (p: IconProps) => (
  <svg {...box(p)}>
    <path d="M3 5.6a1.6 1.6 0 0 1 1.6-1.6h9.6a1.6 1.6 0 0 1 1.6 1.6v5.6a1.6 1.6 0 0 1-1.6 1.6H8.2L4.6 16v-3.2a1.6 1.6 0 0 1-1.6-1.6z" />
    <path d="M18 8.4h1.4A1.6 1.6 0 0 1 21 10v5.6a1.6 1.6 0 0 1-1.6 1.6v3.2l-3.6-3.2h-4" />
  </svg>
)

export const IconShield = (p: IconProps) => (
  <svg {...box(p)}>
    <path d="M12 2.8 4.6 5.8v5.6c0 4.6 3.1 8.3 7.4 9.8 4.3-1.5 7.4-5.2 7.4-9.8V5.8z" />
    <path d="m8.8 11.8 2.3 2.4 4.1-4.6" />
  </svg>
)

export const IconMail = (p: IconProps) => (
  <svg {...box(p)}>
    <rect x="2.8" y="5" width="18.4" height="14" rx="1.4" />
    <path d="m3.4 6.4 8.6 6.6 8.6-6.6" />
  </svg>
)

export const IconPin = (p: IconProps) => (
  <svg {...box(p)}>
    <path d="M12 21.2c4-4.4 6-7.8 6-10.4a6 6 0 1 0-12 0c0 2.6 2 6 6 10.4z" />
    <circle cx="12" cy="10.6" r="2.3" />
  </svg>
)

export const IconClock = (p: IconProps) => (
  <svg {...box(p)}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M12 6.8V12l3.4 2.2" />
  </svg>
)

export const IconArrow = (p: IconProps) => (
  <svg {...box(p)} viewBox="0 0 16 16" width="14" height="14">
    <path d="M1.5 8h13M9.6 3.2 14.4 8l-4.8 4.8" />
  </svg>
)

export const IconChevron = (p: IconProps) => (
  <svg {...box(p)} viewBox="0 0 12 8" width="12" height="8">
    <path d="m1 1.6 5 4.8 5-4.8" />
  </svg>
)

export const IconCheckSeal = (p: IconProps) => (
  <svg {...box(p)}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="m7.8 12.2 2.9 2.9 5.5-6.2" />
  </svg>
)

export const serviceIcons = {
  briefcase: IconBriefcase,
  document: IconDocument,
  people: IconPeople,
  scales: IconScales,
  handshake: IconDialog,
  shield: IconShield,
} as const
