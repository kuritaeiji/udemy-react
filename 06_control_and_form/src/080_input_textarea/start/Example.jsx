import { useState } from 'react'

const Example = () => {
  const [val, setVal] = useState('')
  const clearVal = () => setVal('')
  return (
    <>
      <label htmlFor="123">テキスト</label>
      <input
        type="text"
        id="123"
        placeholder="テキスト"
        value={val}
        onChange={e => setVal(e.target.value)}
      />
      <textarea
        id="456"
        placeholder="テキスト"
        value={val}
        onChange={e => setVal(e.target.value)}
      />
      <div>
        <h3>{val}</h3>
        <button onClick={clearVal}>clear</button>
      </div>
    </>
  )
}

export default Example
