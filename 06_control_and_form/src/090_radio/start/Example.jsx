import { useState } from 'react'

const Example = () => {
  const [fruit, setFruit] = useState('')
  const changeFruit = e => setFruit(e.target.value)
  const fruitValues = ['Apple', 'Banana', 'Orange']
  return (
    <>
      {fruitValues.map(val => (
        <label>
          <input
            type="radio"
            value={val}
            onChange={changeFruit}
            checked={fruit === val}
          />
          {val}
        </label>
      ))}
    </>
  )
}

export default Example
