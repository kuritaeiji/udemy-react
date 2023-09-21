const Example = () => {
  const nums = [1, 2, 3]
  const sum = array => array.reduce((accumulator, num) => accumulator + num)

  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      <div>関数型: {sum(nums)}</div>
    </>
  )
}

export default Example
