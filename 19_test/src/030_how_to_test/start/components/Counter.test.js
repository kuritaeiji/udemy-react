import { screen, render, fireEvent } from '@testing-library/react'
import Counter from './Counter'

test('カウントアップボタンを押下すると現在のカウントが+1される', () => {
  // given
  const { debug } = render(<Counter originCount={0} />)

  // when
  const buttonEl = screen.getByRole('button', { name: 'カウントアップ' })
  fireEvent.click(buttonEl)

  // then
  const spanEl = screen.getByText('現在のカウント:1')
  expect(spanEl).toBeInTheDocument()
})
