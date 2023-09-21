import React from 'react'
import { useTodos } from './TodoContext'

const TodoList: React.FC = () => {
  const todos = useTodos()

  const todoItems = todos.map(todo => <li key={todo.id}>{todo.name}</li>)

  return <ul>{todoItems}</ul>
}

export default TodoList
