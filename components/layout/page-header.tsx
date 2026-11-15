import type { ReactNode } from 'react'
import { Container } from './container'

/* Top block shared by every inner page: eyebrow, h1, optional intro. */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: ReactNode
  title?: ReactNode
  children?: ReactNode
}) {
  return (
    <Container className="pb-8 pt-12 md:pt-16">
      <p>
        {eyebrow}
        {/* <--[Eyebrow]--> */}
      </p>
      <h1 className="mt-3 max-w-3xl">
        {title}
        {/* <--[Page title]--> */}
      </h1>
      <div className="mt-4 max-w-2xl">
        {children}
        {/* <--[Intro]--> */}
      </div>
    </Container>
  )
}
