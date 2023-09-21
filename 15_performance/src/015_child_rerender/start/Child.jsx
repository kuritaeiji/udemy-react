const Child = ({ countB, setCountB }) => {
  console.log('renderB')

  return (
    <div>
      <h2>B: {countB}</h2>
      <button onClick={() => setCountB(prev => prev + 1)}>Bボタン</button>
    </div>
  )
}

export default Child
