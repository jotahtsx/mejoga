import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Importe o jest-dom
import Main from '.' // Importe o componente Main

describe('<Main />', () => {
  it('Precisa renderizar o header', () => {
    render(<Main />)

    // Procura pelo texto "Me Joga" dentro de um elemento <h1>
    const heading = screen.getByRole('heading', { name: /me joga/i })
    expect(heading).toBeInTheDocument() // Agora isso deve funcionar
  })
})
