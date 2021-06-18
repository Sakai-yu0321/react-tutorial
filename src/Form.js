//useStateをreactから読み込み
import {useState} from 'react';

//Formファンクションコンポーネントを定義
export const Form = ({ onAddLang }) => {
  //textのstateを定義
  const [text, setText] = useState('')
  //関数submitFormを定義
  const submitForm = (e) => {
    //フォームの内容が送信された際のデフォルトの動作をキャンセル
    e.preventDefault();
    //App.jsに定義した関数addLangをtextのstate（フォームに入力された値）を引数にして呼び出し
    onAddLang(text);
  }

  //JSX記述
  return (
    <div>
      <h4>新しい言語の追加</h4>
      {/*フォームにsubmit処理を追加し、内容が送信されたときに関数submitFromを呼び出し*/}
      <form onSubmit={submitForm}>
        <div>
          <input
          /*タイプは一行のテキスト入力欄*/
          type="text"
          /*初期値はtextのstate*/
          value={text}
          /*初期値が変更されたらtextのstateを変更された値に変更*/
          onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </div>
  )
}