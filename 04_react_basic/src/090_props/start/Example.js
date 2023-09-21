import { Fragment } from 'react'
import Child from './components/Child'

const Example = () => {
  const hello = arg => `Hello ${arg}`
  const o = {
    color: 'red',
    num: 123
  }
  return (
    <Fragment>
      <Child
        {...o}
        color="red"
        fn={hello}
        obj={{ name: 'eiji', age: 1 }}
      />
      {/* <Child /> */}
    </Fragment>
  )
}

export default Example
