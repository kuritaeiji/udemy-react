import './Example.css'

const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          onInput={e => console.log(e.target.value)}
          onBlur={() => console.log('blur検知')}
          onFocus={() => console.log('onFocus検知')}
        />
      </label>
      <div
        className="hover-event"
        onMouseEnter={() => console.log('カーソルenter')}
        onMouseLeave={() => console.log('カーソルleave')}
      ></div>
      {/* <div>
        <label>
          入力値を取得：
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div> */}
      {/* <div
        className="hover-event"
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
      >
        ホバーしてね！
      </div> */}
    </div>
  )
}

export default Example
