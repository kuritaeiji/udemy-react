import { useContext } from 'react'
import { MyContext } from '../Example'

const OtherChild = () => {
  const [state, dispatch] = useContext(MyContext)

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={() => dispatch()}>+</button>
      <h3>{state}</h3>
    </div>
  )
}

export default OtherChild
