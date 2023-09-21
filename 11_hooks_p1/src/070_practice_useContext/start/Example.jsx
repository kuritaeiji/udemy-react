import Input from './components/Input'
import Result from './components/Result'
import Select from './components/Select'
import { CalcProvider } from './context/UseCalc'

const Example = () => {
  return (
    <CalcProvider>
      <Input calcName={'a'} />
      <Input calcName={'b'} />
      <Select />
      <Result />
    </CalcProvider>
  )
}

export default Example
