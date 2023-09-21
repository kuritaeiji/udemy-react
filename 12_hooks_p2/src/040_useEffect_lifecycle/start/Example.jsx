import { useEffect, useState } from 'react'

const Example = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log('updated')

    return () => {
      console.log('update cleanup')
    }
  }, [state])

  useEffect(() => {
    console.log('mount')

    return () => {
      console.log('unmounted')
    }
  }, [])

  console.log('render')

  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          setState(prev => prev + 1)
        }}
      >
        カウントアップ
      </button>
    </div>
  )
}

export default Example
