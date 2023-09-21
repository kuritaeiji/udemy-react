import { useEffect } from 'react'
import { useState } from 'react'

const Example = () => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    checked && alert('checked')
  }, [checked])

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onClick={e => setChecked(e.target.checked)}
      />
      click me
    </>
  )
}

export default Example
