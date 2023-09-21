import { useRef } from 'react'
import { useState } from 'react'

const Case1 = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef()

  return (
    <div>
      <h3>ユースケース1</h3>
      <input
        type="text"
        value={value}
        ref={inputRef}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  )
}

const Case2 = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef()

  return (
    <div>
      <h3>ユースケース2</h3>
      <video
        style={{ maxWidth: '100%' }}
        ref={videoRef}
      >
        <source src="./sample.mp4" />
      </video>
      <button
        onClick={() => {
          setPlaying(prevPlaying => !prevPlaying)
          if (playing) {
            videoRef.current.pause()
          } else {
            videoRef.current.play()
          }
        }}
      >
        {playing ? '停止' : '再生'}
      </button>
    </div>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  )
}

export default Example
