import type { ReactNode } from 'react'
import { Container } from './container'

type Spacing = 'none' | 'sm' | 'md' | 'lg'

const SPACING: Record<Spacing, string> = {
  none: '',
  sm: 'py-12',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
}

/*
 * Full-bleed band (outer <section>) + centered Container (inner).
 * contained={false} skips the Container for edge-to-edge layouts (e.g. the explorer grids).
 * scroll-mt-20 offsets anchor jumps under the sticky header.
 */
export function Section({
  id,
  labelledBy,
  spacing = 'md',
  contained = true,
  children,
}: {
  id?: string
  labelledBy?: string
  spacing?: Spacing
  contained?: boolean
  children?: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="scroll-mt-20">
      {contained ? <Container className={SPACING[spacing]}>{children}</Container> : children}
    </section>
  )
}
