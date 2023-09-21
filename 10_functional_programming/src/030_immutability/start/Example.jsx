const Example = () => {
  const num = { val: 2 }

  const double = num => {
    return { val: num.val * 2 }
  }
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
      <p>{double(num).val}</p>
    </>
  )
}

export default Example
