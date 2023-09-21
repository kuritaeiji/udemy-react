import './Container.css'

const Container = props => {
  const desc = Reflect.getOwnPropertyDescriptor(props, 'title')
  console.log(desc)
  return (
    <div className="container">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

export default Container
