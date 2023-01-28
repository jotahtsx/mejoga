import Header from 'components/Header'
import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
