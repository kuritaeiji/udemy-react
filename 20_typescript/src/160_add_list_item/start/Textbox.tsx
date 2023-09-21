import { useState } from 'react'
import { useTodoDispatch } from './TodoContext'

const Textbox: React.FC = () => {
  const [value, setValue] = useState('')
  const addTodo = useTodoDispatch()

  const clickAddButton = () => {
    addTodo(value)
    setValue('')
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={clickAddButton}>クリック</button>
    </>
  )
}

export default Textbox
