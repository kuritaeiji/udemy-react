import React, { useState, createContext, useContext } from 'react'

export type Todo = {
  name: string
  id: number
}

const TodoContext = createContext<Todo[] | undefined>(undefined)
const TodoDispatchContext = createContext<
  ((todoName: string) => void) | undefined
>(undefined)

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todoName: string) => {
    setTodos(prev => {
      const id = todos.length ? Math.max(...prev.map(todo => todo.id)) + 1 : 1
      return [...prev, { id, name: todoName }]
    })
  }

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={addTodo}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

const useTodos = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('contextがundefinedです')
  }

  return context
}
const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext)
  if (!context) {
    throw new Error('contextがundefinedです')
  }

  return context
}

export { TodoProvider, useTodos, useTodoDispatch }
