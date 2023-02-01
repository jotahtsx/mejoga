import Head from 'next/head'

import { Slider } from 'components/Slider/Slider'
import { Releases } from 'components/Releases/Releases'

export default function Home() {
  return (
    <>
      <Head>
        <title>Me Joga | Home</title>
      </Head>
      <Slider />
      <Releases />
    </>
  )
}
