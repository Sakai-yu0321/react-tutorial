//React.Componentをreactから読み込み
import React from "react"

//React.Componentを継承するListクラスコンポーネントを定義
export class List extends React.Component {
  render() {
    const { langs } = this.props
    //JSX記述
    return (
      <div>
        {/*mapメソッドで言語の文字列を繰り返し表示*/}
        {
          langs.map((lang, index) => {
            return <div key={index}>{lang}</div>
          })
        }
      </div>
    )
  }
}
