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
  console.log('Props recebidas:', { title, description }) // Verificando as props recebidas

  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{description}</p> {/* Nova prop sendo exibida */}
    </Wrapper>
  )
}

export default Main
