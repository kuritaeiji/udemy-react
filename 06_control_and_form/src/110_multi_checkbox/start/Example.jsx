import { useState } from 'react'

const Example = () => {
  const [fruits, setFruits] = useState([
    { name: 'Apple', price: 100, checked: false },
    { name: 'Banana', price: 200, checked: false },
    { name: 'Orange', price: 300, checked: false }
  ])

  const handleCheck = e => {
    setFruits(
      fruits.map(fruit =>
        e.target.value === fruit.name
          ? { ...fruit, checked: !fruit.checked }
          : fruit
      )
    )
  }

  const sum = () => {
    return fruits.reduce((sum, fruit) => {
      sum += fruit.checked ? fruit.price : 0
      return sum
    }, 0)
  }

  return (
    <>
      {fruits.map(fruit => (
        <label key={fruit.name}>
          <input
            type="checkbox"
            value={fruit.name}
            onChange={handleCheck}
          />
          {fruit.name}:{fruit.price}
        </label>
      ))}
      <p>合計: {sum()}</p>
    </>
  )
}

export default Example
