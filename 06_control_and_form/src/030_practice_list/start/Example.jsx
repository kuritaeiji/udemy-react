const Example = () => {
  const people = [
    {
      name: 'A',
      age: 1
    },
    {
      name: 'B',
      age: 2
    },
    {
      name: 'C',
      age: 3
    }
  ]

  const peopleList = people.map(person => (
    <li key={person}>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </li>
  ))

  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>{peopleList}</ul>
    </>
  )
}

export default Example
