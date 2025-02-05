import GlobalStyles from '@/styles/global'
import { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <div className="wrapper">
        <GlobalStyles />
        {children}
      </div>
    </>
  )
}
