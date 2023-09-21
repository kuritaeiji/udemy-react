import { createContext } from 'react'
import Child from './components/Child'
import OtherChild from './components/OtherChild'
import { useReducer } from 'react'
export const MyContext = createContext()

const Example = () => {
  const stateAndDispatch = useReducer(prev => {
    return prev + 1
  }, 0)

  return (
    <>
      <MyContext.Provider value={stateAndDispatch}>
        <Child />
        <OtherChild />
      </MyContext.Provider>
    </>
  )
}

export default Example
