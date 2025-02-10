'use client'

import { Wrapper } from './styles'

type MainProps = {
  title: string
}

const Main = ({ title }: MainProps) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  )
}

export default Main
