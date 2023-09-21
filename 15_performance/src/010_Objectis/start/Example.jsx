import { useState } from 'react'

const Example = () => {
  const [state, setState] = useState(0)
  console.log('render')

  return (
    <>
      <h3>再レンダリングが発生する条件</h3>
      <p>stateの値が変更された時</p>
      <p>Object.isによって変更は検知される</p>
      <p>{state}</p>
      <button onClick={() => setState(1)}>変更</button>
    </>
  )
}

export default Example
