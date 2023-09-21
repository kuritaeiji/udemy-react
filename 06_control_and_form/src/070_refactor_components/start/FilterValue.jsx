const FilterValue = ({ useValue }) => {
  const [value, setValue] = useValue
  const updateValue = e => {
    setValue(e.target.value)
  }
  return (
    <>
      <input
        type="text"
        value={value}
        onInput={updateValue}
      />
    </>
  )
}

export default FilterValue
