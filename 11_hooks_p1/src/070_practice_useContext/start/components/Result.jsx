import { useCalc } from '../context/UseCalc'

const Result = () => {
  const [calc] = useCalc()

  return <h1>結果:{calc.result}</h1>
}

export default Result
