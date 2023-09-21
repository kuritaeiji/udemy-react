import { render, screen } from '@testing-library/react'
import Message from './Message'
import userEvent from '@testing-library/user-event'

test('メッセージが表示される', async () => {
  // given
  const user = userEvent.setup()
  render(<Message />)

  const h2El = screen.getByRole('heading', { name: '入力された文字:' })
  const inputEl = screen.getByRole('textbox')
  const buttonEl = screen.getByRole('button', { name: '送信ボタン' })

  expect(h2El).toBeInTheDocument()
  expect(buttonEl).toBeDisabled()

  // when
  const inputString = '入力文字列'
  await user.type(inputEl, inputString)
  expect(inputEl.value).toBe(inputString)
  expect(buttonEl).not.toBeDisabled()

  await user.click(buttonEl)

  // then
  expect(buttonEl).toBeDisabled()
  expect(h2El.textContent).toBe(`入力された文字:${inputString}`)
})
