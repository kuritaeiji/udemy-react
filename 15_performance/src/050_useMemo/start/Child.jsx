import React from 'react'
import { useMemo } from 'react'

const Child = ({ onClick }) => {
  console.log('%cChild render', 'color: red;')

  return useMemo(() => {
    console.log('render jsx')
    return (
      <div className="child">
        <h2>子コンポーネント領域</h2>
        <button onClick={onClick}>ボタンB</button>
        {/* <p>ボタンBクリック回数：{countB}</p> */}
      </div>
    )
  }, [onClick])
}

export default Child
