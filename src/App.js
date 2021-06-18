//React.Componentをreactから読み込み
import React from 'react';
//ListコンポーネントをList.jsから読み込み
import { List } from './List.js'
//FormコンポーネントをForm.jsから読み込み
import { Form } from './Form.js'

//React.Componentを継承したAppクラスコンポーネントを定義
class App extends React.Component {
  constructor (props) {
    //コンストラクタでオーバライドしたReact.Componentのプロップスを初期化
    super (props);
    //tabのstateを定義
    this.state = {
      tab: 'list'
    }
  }
  render() {
    //定数tabにstateを代入
    const { tab } = this.state;
    //JSX記述
    return(
      <div>
        <header>
          <ul>
            {/*リストをクリックしたらtabのstateをlistに変更*/}
            <li onClick = {() => this.setState({ tab: 'list' })}>リスト</li>
            {/*フォームをクリックしたらtabのstateをformに変更*/}
            <li onClick = {() => this.setState({ tab: 'form' })}>フォーム</li>
          </ul>
        </header>
        <hr/>
        {/*tabのstateがlistならListコンポーネントを表示、そうでないならFromコンポーネントを表示*/}
        {
          tab === 'list' ? <List /> : <Form/>
        }
      </div>
    )
  }
}

//Appコンポーネントを書き出し
export default App;