import type { ReactNode } from 'react'

export namespace Footer {
  export interface Props {
    children: ReactNode
  }
}

export function Footer({ children }: Footer.Props) {
  return <footer className="max-w-7xl p-10">{children}</footer>
}
