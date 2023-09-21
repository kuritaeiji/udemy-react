import { useContext } from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

const TodoContext = createContext()
const TodoDispatchContext = createContext()

const reducer = (todos, { type, payload: { id, name } }) => {
  switch (type) {
    case 'addTodo':
      const maxId = Math.max(...todos.map(todo => todo.id))
      return [...todos, { id: maxId + 1, name }]
    case 'completeTodo':
      return todos.filter(todo => todo.id !== id)
    case 'editTodo':
      return todos.map(_todo => (_todo.id === id ? { id, name } : _todo))
    default:
      throw new Error()
  }
}

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, name: '卵かう' },
    { id: 2, name: '郵便出す' }
  ])

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)
export const useTodoDispatch = () => useContext(TodoDispatchContext)
