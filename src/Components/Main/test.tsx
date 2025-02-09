import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from '.'

describe('<Main />', () => {
  it('Precisa renderizar o header corretamente e gerar o snapshot', () => {
    const { container } = render(<Main />)

    // Busca o elemento e verifica a existência do mesmo
    expect(screen.getByRole('heading', { name: /me joga/i })).toBeInTheDocument()

    // Gera o snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
