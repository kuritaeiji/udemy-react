import { useState } from 'react'

const Example = () => {
  const personObj = { name: 'Tom', age: 18 }
  const [person, setPerson] = useState(personObj)
  const setName = e => {
    setPerson({ ...person, name: e.target.value })
  }
  const setAge = e => {
    const re = /^[0-9]+$/
    if (e.target.value === '' || re.test(e.target.value)) {
      const age = e.target.value === '' ? '' : +e.target.value
      console.log(age)
      setPerson({ ...person, age })
    } else {
      let age
      if (e.target.value !== '') {
        const value = e.target.value.slice(0, -1)
        if (value === '') {
          age = ''
        } else {
          age = value
        }
      } else {
        age = ''
      }
      setPerson({ ...person, age })
    }
  }
  const reset = () => {
    setPerson(personObj)
  }

  return (
    <>
      <h1>Name: {person.name}</h1>
      <h1>Age: {person.age}</h1>
      <input
        type="text"
        value={person.name}
        onChange={setName}
      />
      <input
        type="text"
        pattern="^[0-9]+$"
        value={person.age}
        onChange={setAge}
      />
      <button onClick={reset}>リセット</button>
    </>
  )
}

export default Example
