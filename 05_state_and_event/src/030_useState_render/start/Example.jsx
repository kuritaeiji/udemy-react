import { useState } from 'react'

const Example = () => {
  const [val, setVal] = useState('')
  console.log('再レンダリングされました')
  return (
    <>
      <input
        type="text"
        onInput={e => setVal(e.target.value)}
      />{' '}
      = {val}
    </>
  )
}

export default Example
