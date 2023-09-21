import { useState } from 'react'

const Example = () => {
  const inputFact = () => ({
    key: Math.floor(Math.random() * 1000),
    value: <input />
  })

  const [inputs, setInputs] = useState([inputFact(), inputFact(), inputFact()])
  const unshiftInput = () => {
    setInputs([inputFact(), ...inputs])
  }
  const inputKeyList = inputs.map(input => (
    <li key={input.key}>
      {input.key}: {input.value}
    </li>
  ))

  const inputIndexList = inputs.map((input, index) => (
    <li key={index}>
      {input.key}: {input.value}
    </li>
  ))

  return (
    <p style={{ textAlign: 'center' }}>
      <div>
        <ul>{inputKeyList}</ul>

        <ul>{inputIndexList}</ul>

        <button onClick={unshiftInput}>unshiftInput</button>
      </div>
    </p>
  )
}

export default Example
