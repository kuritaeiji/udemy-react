import { useState } from 'react'
import List from './List'
import Form from './Form'

const Todo = () => {
  const [todoList, setTodoList] = useState(['店予約する', '卵買う'])

  const deleteTodo = todoName => {
    setTodoList(todoList.filter(todo => todo !== todoName))
  }

  const addTodo = todoName => {
    setTodoList([...todoList, todoName])
  }

  return (
    <>
      <List
        todoList={todoList}
        deleteTodo={deleteTodo}
      />
      <Form addTodo={addTodo} />
    </>
  )
}

export default Todo
