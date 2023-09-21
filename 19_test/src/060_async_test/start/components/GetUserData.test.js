import { render, screen } from '@testing-library/react'
import GetUserData from './GetUserData'
import axios from 'axios'

const END_POINT = 'http://localhost:4030/users/1'

jest.mock('axios')

describe('getUserDate', () => {
  test('外部データ取得前', async () => {
    // given
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        name: 'name'
      }
    })

    render(<GetUserData url={END_POINT} />)

    // then
    const h1El = await screen.findByRole('heading', { name: '通信中です！' })

    expect(h1El).toBeInTheDocument()
  })

  test('外部データ取得後', async () => {
    // given
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        name: 'name'
      }
    })
    const { debug } = render(<GetUserData url={END_POINT} />)

    // then
    const h2El = await screen.findByRole('heading', { name: 'プロフィール' })
    expect(h2El).toBeInTheDocument()
    const idEl = screen.getAllByRole('listitem')[0]
    const nameEl = screen.getAllByRole('listitem')[1]
    expect(idEl.textContent).toBe('ID: 1')
  })
})
