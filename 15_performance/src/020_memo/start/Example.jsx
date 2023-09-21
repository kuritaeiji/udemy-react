import { useReducer } from 'react'
import Child from './Child'
import { useState } from 'react'

const Example = () => {
  const [countA, setCountA] = useState(0)

  const [count, dispatch] = useReducer(prev => {
    return prev + 1
  }, 0)
  console.log('render parent')

  return (
    <div>
      <p>{countA}</p>
      <button onClick={() => setCountA(prev => prev + 1)}>A</button>
      <Child
        count={count}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Example
