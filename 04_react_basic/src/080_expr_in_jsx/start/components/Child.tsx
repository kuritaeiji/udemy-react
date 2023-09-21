import './Child.css'

const Child = () => {
  const title = 'Expression'
  const array = ['item1', 'item2']
  const hello = (arg: string) => `${arg} Function`
  const jsx = <h3>jsx</h3>
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello('JSX')}</h3>
      {<h3>Hello JSX</h3>}
      {jsx}
    </div>
  )
}

export default Child
