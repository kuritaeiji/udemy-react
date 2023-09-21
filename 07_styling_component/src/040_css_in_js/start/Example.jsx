import { useState } from 'react'
import styled from 'styled-components'

const Example = () => {
  const [isSelected, setIsSelected] = useState(false)

  const clickHandler = () => setIsSelected(prev => !prev)

  console.dir(styled)
  const StyledButton = styled.button`
    margin: auto;
    border-radius: 30%;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${({ isSelected }) => (isSelected ? 'pink' : '')};
  `

  const OrangeButton = styled(StyledButton)`
    background-color: orange;

    @media (max-width: 600px) {
      border-radius: 0;
    }

    :hover {
      cursor: pointer;
    }

    span {
      font-size: 2rem;
    }
  `

  return (
    <>
      <StyledButton
        isSelected={isSelected}
        children="ボタン"
      />
      <OrangeButton>
        <span>ボタン</span>
      </OrangeButton>
      <button
        className={`btn ${isSelected ? 'selected' : ''}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: 'center' }}>
        {isSelected && 'クリックされました。'}
      </div>
    </>
  )
}

export default Example
