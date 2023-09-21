import { useState } from 'react'

import FilterValue from './FilterValue'
import AnimalList from './AnimalList'

const Example = () => {
  const [value, setValue] = useState('')
  const animals = ['Dog', 'Cat', 'Rat']
  const filteredAnimals = animals.filter(a => a.includes(value))

  return (
    <>
      <FilterValue useValue={[value, setValue]} />
      <AnimalList animals={filteredAnimals} />
    </>
  )
}

export default Example
