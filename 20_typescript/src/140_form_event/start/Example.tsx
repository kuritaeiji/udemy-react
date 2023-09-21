import React from 'react'

const Example: React.FC = () => {
  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event)
  }
  return <button onClick={event => clickHandler(event)}></button>
}

export default Example
