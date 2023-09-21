import { useEffect, useState } from 'react'

const Example = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    console.log(time)
    localStorage.setItem('time', time)
  }, [time])

  return <p>{time}</p>
}

export default Example
