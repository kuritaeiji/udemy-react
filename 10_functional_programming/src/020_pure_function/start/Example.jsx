const Example = () => {
  const val1 = 1,
    val2 = 2,
    val3 = 3
  let result = 0
  const add = (val1, val2) => {
    result = 100
    return val1 + val2 + val3
  }

  return (
    <>
      <h3>純粋関数</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
      <p>{add(val1, val2)}</p>
    </>
  )
}

export default Example
