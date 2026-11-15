import type { ReactNode } from 'react'

/* Shared width + gutter wrapper. Every section's content sits inside one of these. */
export function Container({ children, className = '' }: { children?: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${className}`.trim()}>{children}</div>
}
