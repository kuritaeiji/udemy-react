import { useCalc } from '../context/UseCalc'

export const Input = ({ calcName }) => {
  const [calc, updateCalc] = useCalc()

  return (
    <label>
      {calcName}:
      <input
        type="text"
        value={calc[calcName]}
        onChange={e =>
          updateCalc({
            type: 'change',
            payload: { name: calcName, value: e.target.value }
          })
        }
      />
    </label>
  )
}

export default Input
