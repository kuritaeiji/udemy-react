import Hello, { Btn } from './Hello'

const Example = () => {
  return (
    <>
      <Btn fn={text => console.log(text)}></Btn>
      <Hello text={'テキスト'}>チルドレン</Hello>
    </>
  )
}

export default Example
