import { useEffect } from 'react'
import { useState } from 'react'

const Example = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
  }, [])

  return <p>{time}</p>
}

export default Example
