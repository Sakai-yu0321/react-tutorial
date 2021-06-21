//React.Componentをreactから読み込み
import React from 'react';
//ListコンポーネントをList.jsから読み込み
import { List } from './List.js'
//FormコンポーネントをForm.jsから読み込み
import { Form } from './Form.js'
//言語情報の配列をconst/languages.jsから読み込み
import { getLanguages } from './const/languages.js'

//React.Componentを継承したAppクラスコンポーネントを定義
class App extends React.Component {
  constructor (props) {
    //コンストラクタでオーバライドしたReact.Componentのプロップスを初期化
    super (props);
    this.state = {
      //tabのstateを定義
      tab: 'list',
      //langsのstateを定義
      langs: []
    }
  }
  //ライフサイクルのmounting時に呼び出される関数を定義
  componentDidMount() {
    console.log('App.js:componentDidMount');
    //関数呼び出し
    this.fetchLanguages();
  }
  //languages.jsの関数getLanguagesの処理が終了したらその返り値をlangsのstateに定義する
  async fetchLanguages() {
    const langs = await getLanguages();
    this.setState({ langs });
  }
  //lang（フォームの入力値）を引数に関数addLangを定義
  addLang(lang) {
    this.setState({
      //tabのstateをlistに変更
      tab: 'list',
      //langsのstate(言語情報の配列)にlang(フォームの入力値)を追加
      //langsはスプレット構文で展開
      langs: [...this.state.langs, lang]
    });
  }
  render() {
    //tabとlangsのstateを取り出し
    const { tab, langs } = this.state;
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
        {/*Listコンポーネントにlangsのstate（言語情報の配列）を渡す*/}
        {/*Formコンポーネントに関数addLangをプロパティonAddLang*/}
        {
          tab === 'list' ? <List langs={langs}/> : <Form onAddLang={(text) => this.addLang(text)}/>
        }
      </div>
    )
  }
}

//Appコンポーネントを書き出し
export default App;