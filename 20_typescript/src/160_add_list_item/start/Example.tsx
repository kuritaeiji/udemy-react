import Textbox from './Textbox'
import { TodoProvider } from './TodoContext'
import TodoList from './TodoList'

const Example = () => {
  return (
    <TodoProvider>
      <Textbox />
      <TodoList />
    </TodoProvider>
  )
}

export default Example
