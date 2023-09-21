import { useState } from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState({ count: 0, step: 1 })

  const countUp = () => {
    setCounter(prev => ({ ...prev, count: prev.count + prev.step }))
  }

  const countDown = () => {
    setCounter(prev => ({ ...prev, count: prev.count - 1 }))
  }

  const changeStep = step => {
    setCounter(prev => ({ ...prev, step }))
  }

  return { counter, countUp, countDown, changeStep }
}

export default useCounter
