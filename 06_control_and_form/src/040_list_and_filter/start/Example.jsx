import { useState } from 'react'

const animals = ['Dog', 'Cat', 'Rat']

const Example = () => {
  const [value, setValue] = useState('')

  const updateValue = e => {
    setValue(e.target.value)
  }

  const filteredAnimals = animals
    .filter(animal => animal.includes(value))
    .map(animal => <li key={animal}>{animal}</li>)

  return (
    <>
      <input
        type="text"
        value={value}
        onInput={updateValue}
      />
      <h3>配列のフィルター</h3>
      <ul>{filteredAnimals}</ul>
    </>
  )
}

export default Example
