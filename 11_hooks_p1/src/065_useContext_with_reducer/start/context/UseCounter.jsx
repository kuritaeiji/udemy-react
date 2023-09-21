import { useContext } from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

const CounterContext = createContext()
const UpdateCounterContext = createContext()

const CounterProvider = ({ children }) => {
  const [counter, updateCounter] = useReducer((prev, { type, step }) => {
    switch (type) {
      case '+':
        return prev + step
      case '-':
        return prev - step
      default:
        throw new Error()
    }
  }, 0)

  return (
    <CounterContext.Provider value={counter}>
      <UpdateCounterContext.Provider value={updateCounter}>
        {children}
      </UpdateCounterContext.Provider>
    </CounterContext.Provider>
  )
}

const useCounter = () => useContext(CounterContext)
const useUpdateCounter = () => useContext(UpdateCounterContext)

export { CounterProvider, useCounter, useUpdateCounter }
