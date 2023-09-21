import { useReducer } from 'react'

const reducer = (prev, { type, payload }) => {
  switch (type) {
    case 'change':
      const { name, value } = payload
      return { ...prev, [name]: +value }
    case 'add':
      return { ...prev, result: prev.a + prev.b }
    case 'minus':
      return { ...prev, result: prev.a - prev.b }
    case 'multiply':
      return { ...prev, result: prev.a * prev.b }
    case 'divide':
      return { ...prev, result: prev.a / prev.b }
    default:
      throw new Error()
  }
}

const initState = {
  a: 0,
  b: 0,
  result: 0
}

const CALC_OPTIONS = ['add', 'minus', 'divide', 'multiply']

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <>
      {['a', 'b'].map(char => (
        <>
          <label>
            {char}:
            <input
              type="text"
              value={state[char]}
              onChange={e =>
                dispatch({
                  type: 'change',
                  payload: { name: char, value: e.target.value }
                })
              }
            />
          </label>
        </>
      ))}
      <select onChange={e => dispatch({ type: e.target.value })}>
        {CALC_OPTIONS.map(calc => (
          <option value={calc}>{calc}</option>
        ))}
      </select>
      <h3>{state.result}</h3>
    </>
  )
}

export default Example
