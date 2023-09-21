import { memo } from 'react'

const Child = memo(({ count, dispatch }) => {
  console.log('render child')

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch()}>ボタン</button>
    </div>
  )
})

export default Child
