import { useState } from 'react'
import Child from './Child'

const Example = () => {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  console.log('renderA')

  return (
    <>
      <h2>A: {countA}</h2>
      <button onClick={() => setCountA(prev => prev + 1)}>ボタンA</button>
      <Child
        countB={countB}
        setCountB={setCountB}
      />
    </>
  )
}

export default Example
