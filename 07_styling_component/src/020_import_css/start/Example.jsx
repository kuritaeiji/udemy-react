import { useState } from 'react'
import './Example.css'

const Example = () => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <button
        className={`btn ${selected ? 'selected' : ''}`}
        onClick={() => setSelected(prevSelected => !prevSelected)}
      >
        ボタン
      </button>
    </>
  )
}

export default Example
