const { useState, useEffect } = require('react')

const Example = () => {
  const [isDisp, setIsDisp] = useState(true)

  const toggleIsDisp = () => {
    setIsDisp(prev => !prev)
  }

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => toggleIsDisp()}>
        {isDisp ? '非表示' : '表示'}
      </button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    let intervalId
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  const toggleIsRunning = () => {
    setIsRunning(prev => !prev)
  }

  const reset = () => {
    setTime(0)
    setIsRunning(false)
  }

  return (
    <>
      <p>{time}</p>
      <button onClick={() => toggleIsRunning()}>
        {isRunning ? '一時停止' : 'スタート'}
      </button>
      <button onClick={() => reset()}>リセット</button>
    </>
  )
}

export default Example
