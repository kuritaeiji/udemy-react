import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Message from './Message'

test('テキストボックスに入力すると文字列が変化する', async () => {
  // given
  const user = userEvent.setup()
  render(<Message />)

  // when
  const inputEl = screen.getByRole('textbox', {})
  expect(inputEl).toBeInTheDocument()
  await user.type(inputEl, '入力文字')

  // then
  expect(inputEl.value).toBe('入力文字')
})
