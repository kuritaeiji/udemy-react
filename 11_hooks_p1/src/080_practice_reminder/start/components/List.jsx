import { useTodo } from '../context/TodoContext'
import Todo from './Todo'

const List = () => {
  const todos = useTodo()
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  )
}

export default List
