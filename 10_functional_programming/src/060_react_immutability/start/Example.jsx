import { useState } from 'react'

const Child = ({ state, setState }) => {
  const increment = () => {
    setState(prev => ({
      value: prev.value + 1
    }))
  }
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

const Example = () => {
  const [state, setState] = useState({ value: 0 })
  return (
    <>
      <Child
        state={state}
        setState={setState}
      />
    </>
  )
}

export default Example
