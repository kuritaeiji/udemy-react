import { useState } from 'react'

const Example = () => {
  const [isChecked, setIsChecked] = useState(false)
  const toggleChecked = () => setIsChecked(prevIsChecked => !prevIsChecked)
  return (
    <>
      <label htmlFor="isChecked">チェックボックス</label>
      <input
        type="checkbox"
        id="isChecked"
        onChange={toggleChecked}
        checked={isChecked}
      />
      <h1>{isChecked ? 'チェック済み' : 'チェックされてない'}</h1>
    </>
  )
}

export default Example
