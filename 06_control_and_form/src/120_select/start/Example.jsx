import { useState } from 'react'

const Example = () => {
  const [fruit, setFruit] = useState('Apple')
  const fruitValues = ['Apple', 'Orange']
  return (
    <>
      <select
        value={fruit}
        onChange={e => setFruit(e.target.value)}
      >
        {fruitValues.map(value => (
          <option
            key={value}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
      <h1>{fruit}</h1>
    </>
  )
}

export default Example
