import { useCalc } from '../context/UseCalc'

const Select = () => {
  const options = ['add', 'minus']
  const [, updateCalc] = useCalc()

  return (
    <select onChange={e => updateCalc({ type: e.target.value })}>
      {options.map(option => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
