import { useState } from 'react'

const Example = () => {
  console.log(<Example />)
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(10)

  return (
    <>
      {countA}
      <button onClick={() => setCountA(countA + 1)}>A</button>
      {countB}
      <button onClick={() => setCountB(countB + 10)}>B</button>
    </>
  )
}

export default Example
