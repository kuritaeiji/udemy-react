import { useState } from 'react'

const Example = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountResult count={count} />
      <CountUpdate setCount={setCount} />
    </>
  )
}

const CountResult = ({ count }) => {
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

const CountUpdate = ({ setCount }) => {
  const plusCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const minusCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
    </>
  )
}

export default Example
