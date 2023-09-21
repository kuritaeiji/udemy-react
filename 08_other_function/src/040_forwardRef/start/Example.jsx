const { useRef } = require('react')
const { useState } = require('react')
const { forwardRef } = require('react')

const Input = forwardRef(({ value, setValue }, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
})

const Example = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef()

  return (
    <>
      <Input
        value={value}
        setValue={setValue}
        ref={inputRef}
      />
      <button onClick={() => inputRef.current.focus()}>フォーカス</button>
    </>
  )
}

export default Example
