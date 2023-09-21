import { useContext } from 'react'
import { MyContext } from '../Example'

const GrandChild = () => {
  const value = useContext(MyContext)
  return (
    <div style={{ border: '1px solid black' }}>
      <h3>孫コンポーネント</h3>
      <p>{value}</p>
    </div>
  )
}
export default GrandChild
