const ChildPure = ({ value }) => {
  return <div>{value}</div>
}

const Example = () => {
  const children = [1, 2, 3].map(num => <ChildPure value={num} />)

  return <>{children}</>
}

export default Example
