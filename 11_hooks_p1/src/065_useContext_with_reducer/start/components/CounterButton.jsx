import { useUpdateCounter } from '../context/UseCounter'

const CounterButton = ({ calcType, step }) => {
  const updateCounter = useUpdateCounter()

  return (
    <button onClick={() => updateCounter({ type: calcType, step })}>
      {calcType}
      {step}
    </button>
  )
}
export default CounterButton
