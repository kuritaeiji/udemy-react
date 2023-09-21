import { useState } from 'react'
import Profile from './components/Profile'

const persons = [
  {
    name: 'Geo',
    age: 18,
    hobbies: ['sports', 'music']
  },
  {
    name: 'Tom',
    age: 25,
    hobbies: ['movie', 'music']
  },
  {
    name: 'Lisa',
    age: 21,
    hobbies: ['sports', 'travel', 'game']
  }
]

const Example = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <h3>練習問題</h3>
      <p>
        <input
          type="text"
          value={value}
          onInput={e => setValue(e.target.value)}
        />
      </p>
      <ul>
        {persons
          .filter(p => p.name.includes(value))
          .map(person => (
            <li key={person}>
              {person.name}
              {person.name.startsWith('G') && '★'}
            </li>
          ))}
      </ul>
    </>
  )
}

export default Example
