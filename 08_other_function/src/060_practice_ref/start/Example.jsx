import { forwardRef } from 'react'
import { useImperativeHandle } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Video = forwardRef((props, ref) => {
  const videoRef = useRef()
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    }
  }))

  return (
    <video
      ref={videoRef}
      style={{ width: '100%' }}
    >
      <source src="./sample.mp4"></source>
    </video>
  )
})

const Example = () => {
  const [play, setPlay] = useState(false)
  const videoRef = useRef()

  return (
    <>
      <Video ref={videoRef} />
      <button
        onClick={() => {
          setPlay(prevPlay => !prevPlay)
          if (play) {
            videoRef.current.pause()
          } else {
            videoRef.current.play()
          }
        }}
      >
        {play ? '停止' : '再生'}
      </button>
    </>
  )
}

export default Example
