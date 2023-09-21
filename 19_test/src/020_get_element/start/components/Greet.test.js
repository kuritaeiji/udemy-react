import { render, screen } from '@testing-library/react'
import Greet from './Greet'

test('test', () => {
  const { container, debug } = render(<Greet />)
  const radioEl = screen.getByRole('radio')
  screen.debug(radioEl)
  expect(radioEl).toBeInTheDocument()

  const img = screen.getByRole('img')
  screen.debug(img)

  const headingEl = screen.getByRole('heading', { name: 'こんばんは' })
  screen.debug(headingEl)

  const h1El = container.querySelector('h1')
  screen.debug(h1El)

  const elByLabel = screen.getByLabelText('氏名')
  screen.debug(elByLabel)

  const elByPlaceholder = screen.getByPlaceholderText('氏名')
  screen.debug(elByPlaceholder)
})
