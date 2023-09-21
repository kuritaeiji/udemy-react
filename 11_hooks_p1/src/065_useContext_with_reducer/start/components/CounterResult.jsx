import { useCounter } from '../context/UseCounter'

const CounterResult = () => {
  const counter = useCounter()

  return <h3>{counter}</h3>
}

export default CounterResult
