import { useState } from 'react'

const Example = () => {
  const [val, setVal] = useState(0)
  const plus = () => {
    setVal(val + 1)
    setVal(prevVal => prevVal + 1)
  }
  return (
    <>
      {val}
      <br />
      <button onClick={plus}>ボタン</button>
    </>
  )
}

export default Example
