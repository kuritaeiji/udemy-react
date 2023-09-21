const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました')
  }
  const clickHandler2 = () => {
    console.log('a')
  }

  const jsx = (
    <div>
      <h3>startフォルダのコード</h3>
      <button onClick={clickHandler}>クリック</button>
      <button onClick={clickHandler2}>クリック</button>
    </div>
  )

  console.log(jsx)

  return jsx
}
export default Example
