import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from './index'

describe('<Main />', () => {
  it('Precisa renderizar o header corretamente e gerar o snapshot', () => {
    // Renderiza o componente com a prop title
    const { container } = render(<Main title="Me Joga" />)

    // Verifica se o título correto está na tela
    expect(screen.getByRole('heading', { name: /me joga/i })).toBeInTheDocument()

    // Gera o snapshot para comparação visual
    expect(container.firstChild).toMatchSnapshot()
  })

  it('As cores precisam estar no padrão da verificação', () => {
    // Renderiza o componente com a prop title
    const { container } = render(<Main title="Me Joga" />)

    // Verifica se a cor de fundo está correta
    expect(container.firstChild).toHaveStyle('background-color: rgb(6, 9, 43)')
  })
})
