import type { ReactNode } from 'react'

export namespace Header {
  export interface Props {
    children: ReactNode
  }
}

export function Header({ children }: Header.Props) {
  return <header className="max-w-7xl p-10">{children}</header>
}
