import { useEffect, useState } from 'react'

const useTimer = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let timerId
    if (isRunning) {
      timerId = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    }

    return () => {
      clearInterval(timerId)
    }
  }, [isRunning])

  const toggle = () => {
    setIsRunning(prev => !prev)
  }

  const reset = () => {
    setTime(0)
    setIsRunning(false)
  }

  return { time, isRunning, toggle, reset }
}

export default useTimer
