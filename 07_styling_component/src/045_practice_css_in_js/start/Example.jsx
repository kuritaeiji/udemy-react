import styled from 'styled-components'

const FirstButton = styled.button`
  width: 200px;
  height: 35px;
  text-align: center;
  background-color: pink;
  border: none;
  display: block;
  border-radius: 3px;
  margin-top: 10px;
`

const SecondButton = styled(FirstButton)`
  background-color: red;
  color: white;
`

const ThirdButton = styled(SecondButton)`
  background-color: ${({ dark }) => (dark ? 'black' : 'green')};
`

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <FirstButton children="ボタン1" />
      <SecondButton children="ボタン2" />
      <ThirdButton
        children="ボタン3"
        dark={true}
      />
      <p>
        記述を変更し、完成コードと同じ状態になるようにしてください。
        <ul>
          <li>Q1. FirstButtonのbackgroudをpinkにしてください。</li>
          <li>
            Q2.
            FirstButtonを継承したSecondButtonを作成し、backgroudをredに、colorをwhiteにしてください。{' '}
          </li>
          <li>
            Q3.
            SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。
          </li>
        </ul>
      </p>
      <FirstButton>ボタン1</FirstButton>
    </>
  )
}

export default Example
