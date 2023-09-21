import { useState } from 'react'
import { useTodo, useTodoDispatch } from '../context/TodoContext'

const Form = () => {
  const [value, setValue] = useState('')
  const dispatch = useTodoDispatch()

  const addTodo = () => {
    dispatch({ type: 'addTodo', payload: { name: value } })
    setValue('')
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
    </div>
  )
}

export default Form
