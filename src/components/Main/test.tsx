import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Precisa estar entre as tags <h1> a <h6>', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /me joga/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
