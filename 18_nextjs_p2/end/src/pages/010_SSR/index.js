import { useState, useEffect } from 'react'

const SSR = () => {
  console.log('hello')

  useEffect(() => {
    window.localStorage.setItem('key', 'value')
  }, [])

  const [state, setState] = useState('bye')
  const val = 0
  return <h3>{state}</h3>
}

export default SSR
