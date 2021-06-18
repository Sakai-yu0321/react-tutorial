//React.Componentをreactから読み込み
import React from 'react';

//React.Componentを継承するFormクラスコンポーネントを定義
export class Form extends React.Component {
  constructor (props) {
    super(props);
    //コンストラクタにtextというstateを定義
    this.state = { text:'' }
  }
  //フォームが送信されたときに呼ばれる関数を定義
  //引数の(e)にはイベントがはいる(この場合はonSubmitイベント)
  submitForm(e) {
    //イベントのデフォルトの動作をキャンセル
    //（この場合はフォーム送信によるページの再読み込みをキャンセル）
    e.preventDefault();
    //textのstate(フォームの入力値)を引数にして親コンポーネントから送られてきた関数を呼び出し
    this.props.onAddLang(this.state.text);
  }
  render() {
    //textのstateを取り出し定数textに代入
    const { text } = this.state;
    return (
      <div>
        <h4>新しい言語を追加</h4>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div>
            <input
              type="text"
              //初期値にtextのstateを定義
              value={ text }
              //フォームの値が変更されたら（初期値が変わったら）その値をtextのstateに保存
              onChange={(e) => this.setState({text: e.target.value})}
            />
          </div>
          <div>
            <button>追加</button>
          </div>
        </form>
      </div>
    )
  }
}