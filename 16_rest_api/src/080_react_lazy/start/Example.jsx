import { Suspense } from 'react'
import { lazy } from 'react'
import { useState } from 'react'

const LazyComponentA = lazy(async () => import('./components/ComponentA'))
const LazyComponentB = lazy(async () => import('./components/ComponentB'))

const Example = () => {
  const [compA, setCompA] = useState(true)

  return (
    <div>
      <button onClick={() => setCompA(prev => !prev)}>切り替え</button>
      <Suspense fallback={<p>is loading</p>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </div>
  )
}

export default Example
