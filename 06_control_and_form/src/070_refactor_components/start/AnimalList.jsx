import AnimalItem from './AnimalItem'

const AnimalList = ({ animals }) => {
  const animalItems = animals.map(animal => (
    <AnimalItem
      key={animal}
      animal={animal}
    />
  ))

  return (
    <>
      <ul>{animalItems}</ul>
    </>
  )
}

export default AnimalList
