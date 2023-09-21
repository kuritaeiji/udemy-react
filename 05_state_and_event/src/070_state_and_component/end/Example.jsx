import { useState } from 'react'

const Example = () => {
  const [toggle, setToggle] = useState(true)
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  const clickToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <button onClick={clickToggle}>toggle</button>
      {toggle ? (
        <Profile
          title="A"
          count={countA}
          setCount={setCountA}
        />
      ) : (
        <Profile
          title="B"
          count={countB}
          setCount={setCountB}
        />
      )}
    </>
  )
}

const Profile = ({ title, count, setCount }) => {
  const plusCount = () => {
    setCount(count + 1)
  }

  const minusCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>
        {title}: {count}
      </h1>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
    </>
  )
}

export default Example
