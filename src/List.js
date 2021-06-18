//React.Componentをreactから読み込み
import React from "react"

//言語の文字列を含む配列を定義
const LANGUAGES = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
];

//React.Componentを継承するListクラスコンポーネントを定義
export class List extends React.Component {
  render() {
    //JSX記述
    return (
      <div>
        {/*mapメソッドで言語の文字列を繰り返し表示*/}
        {
          LANGUAGES.map((lang, index) => {
            return <div key={index}>{lang}</div>
          })
        }
      </div>
    )
  }
}
