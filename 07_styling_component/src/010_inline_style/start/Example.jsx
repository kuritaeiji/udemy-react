import { useState } from 'react'

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
