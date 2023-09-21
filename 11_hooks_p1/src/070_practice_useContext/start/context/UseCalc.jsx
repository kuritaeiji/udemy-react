import { useReducer } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const CalcContext = createContext()

const CalcProvider = ({ children }) => {
  const initCalc = { a: 0, b: 0, result: 0 }

  const [calc, updateCalc] = useReducer((prev, { type, payload }) => {
    switch (type) {
      case 'change':
        const { name, value } = payload
        return { ...prev, [name]: +value }
      case 'add':
        return { ...prev, result: prev.a + prev.b }
      case 'minus':
        return { ...prev, result: prev.a - prev.b }
      default:
        throw new Error()
    }
  }, initCalc)

  return (
    <CalcContext.Provider value={[calc, updateCalc]}>
      {children}
    </CalcContext.Provider>
  )
}

const useCalc = () => useContext(CalcContext)

export { CalcProvider, useCalc }
