const List = ({ todoList, deleteTodo }) => {
  const complete = todoName => {
    deleteTodo(todoName)
  }

  const todoListJsx = todoList.map(todo => (
    <li key={todo}>
      <button onClick={() => complete(todo)}>完了</button>
      {todo}
    </li>
  ))

  return (
    <>
      <ul>{todoListJsx}</ul>
    </>
  )
}

export default List
