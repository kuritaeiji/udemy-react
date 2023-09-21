import { FC, ReactNode } from 'react'

type HelloProps = {
  text: string
  children: ReactNode
}

const Hello: FC<HelloProps> = ({ text, children }) => {
  return (
    <h1>
      {text}
      {children}
    </h1>
  )
}

export default Hello

type BtnFn = {
  fn: (text: string) => void
}

const Btn: FC<BtnFn> = ({ fn }) => {
  return <button onClick={() => fn('クリックされたよ')}>ボタン</button>
}

export { Btn }
