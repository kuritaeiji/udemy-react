import { useTodo, useTodoDispatch } from '../context/TodoContext'

const TodoInput = ({ todo, enterHandler }) => {
  const dispatch = useTodoDispatch()
  const todos = useTodo()

  const cTodo = todos.find(el => el.id === todo.id)

  const editTodo = e => {
    dispatch({
      type: 'editTodo',
      payload: { id: todo.id, name: e.target.value }
    })
  }

  const closeInput = e => {
    if (e.key === 'Enter') {
      enterHandler()
    }
  }

  return (
    <input
      value={cTodo.name}
      onChange={e => editTodo(e)}
      onKeyDown={e => closeInput(e)}
    />
  )
}

export default TodoInput
