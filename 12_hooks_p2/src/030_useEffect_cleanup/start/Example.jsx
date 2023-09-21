import { useEffect } from 'react'
import { useState } from 'react'

const Example = () => {
  const [isDisp, setIsDisp] = useState(true)
  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      console.log('aaa')
      setTime(prev => prev + 1)
    }, 1000)
    return () => {
      window.clearInterval(id)
    }
  }, [])

  useEffect(() => {
    console.log('bbb')
    return () => {
      console.log('ccc')
    }
  }, [time])

  return <p>{time}</p>
}

export default Example
