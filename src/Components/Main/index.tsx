'use client'

import { Wrapper } from './styles'

type MainProps = {
  title?: string
  description?: string
}

const Main = ({
  title = 'Me Joga',
  description = 'Sua próxima aventura começa aqui!',
}: MainProps) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </Wrapper>
  )
}

export default Main
