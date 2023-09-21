import { useReducer } from 'react'
import { useState } from 'react'

const Example = () => {
  const [state, setState] = useState(0)

  const countUp = () => {
    setState(prevState => prevState + 1)
  }

  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case '+':
        return prev + step
      case '-':
        return prev - step
      default:
        throw new Error(`${type}は存在しないタイプです`)
    }
  })

  return (
    <>
      <h3>{state}</h3>
      <button
        onClick={countUp}
        style={{ marginBottom: '20px' }}
      >
        +
      </button>
      <h3>{rstate}</h3>
      <button onClick={() => dispatch({ type: '+', step: 1 })}>+</button>
      <button onClick={() => dispatch({ type: '-', step: 1 })}>-</button>
    </>
  )
}

export default Example
