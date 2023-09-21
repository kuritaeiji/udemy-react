import { useState } from 'react'
import { useTodoDispatch } from '../context/TodoContext'
import TodoInput from './TodoInput'

const Todo = ({ todo }) => {
  const [showInput, setShowInput] = useState(false)

  const dispatch = useTodoDispatch()

  const todoContent = showInput ? (
    <TodoInput
      todo={todo}
      enterHandler={() => setShowInput(false)}
    />
  ) : (
    <p onDoubleClick={() => setShowInput(true)}>{todo.name}</p>
  )

  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: 'completeTodo', payload: { id: todo.id } })
        }
      >
        完了
      </button>
      {todoContent}
    </div>
  )
}
export default Todo
