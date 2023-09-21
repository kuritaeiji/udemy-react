// POINT React要素とコンポーネントの関係
import React from 'react'

const Bye = () => {
  return React.createElement('h1', { children: 'bye' })
}

// const Hello = () => {
//   return <h1>Hello</h1>;
// }

const Example = () => {
  return (
    <div>
      <Bye />
    </div>
  )
}

console.log(Example())

// console.log(Example());

export default Example
