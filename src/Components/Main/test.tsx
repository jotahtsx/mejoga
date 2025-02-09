import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from '.'

describe('<Main />', () => {
  it('Precisa renderizar o header corretamente e gerar o snapshot', () => {
    // Renderiza o component
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /me joga/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('As cores precisam estar no padrão da verificação', () => {
    // Renderiza o component
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle('background-color: #06092b')
  })
})
