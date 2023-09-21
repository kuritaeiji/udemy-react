import { useState } from 'react'

const Form = ({ addTodo }) => {
  const [formValue, setFormValue] = useState('')

  return (
    <>
      <input
        type="text"
        value={formValue}
        onChange={e => setFormValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(formValue)
          setFormValue('')
        }}
      >
        追加
      </button>
    </>
  )
}

export default Form
