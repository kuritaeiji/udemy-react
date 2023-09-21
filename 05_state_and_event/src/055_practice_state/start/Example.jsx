import { useState } from 'react'

const Example = () => {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>+</button>
    </>
  )
}

export default Example
