import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  console.log(router)

  const clickHandler = () => {
    router.push('/')
  }

  return (
    <>
      <h1>routerカラ取得: {router.query.name}</h1>
      <button onClick={clickHandler}>画面遷移</button>
    </>
  )
}
