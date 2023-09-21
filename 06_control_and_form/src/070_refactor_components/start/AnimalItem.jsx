const AnimalItem = ({ animal }) => {
  return (
    <li>
      {animal}
      {animal.startsWith('D') && '★'}
    </li>
  )
}

export default AnimalItem
