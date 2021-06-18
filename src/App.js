//useStateという関数をreactから読み込み
import { useState } from 'react';
//ListコンポーネントをList.jsから読み込み
import { List } from "./List";
//FormコンポーネントをForm.jsから読み込み
import { Form } from "./Form";

function App() {
  // tabのstateを定義
  const [tab, setTab] = useState('list');

  return (
    <div>
      <header>
        <ul>
          {/*リストがクリックされたら、state2をlistに変更*/}
          <li onClick={() => setTab('list')}>リスト</li>
          {/*フォームがクリックされたら、state2をformに変更*/}
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr/>
      {/*state2がlistなら、Listコンポーネントを表示。そうでないなら、Formコンポーネントを表示*/}
      {
        tab === 'list' ? <List /> : <Form />
      }
    </div>
  );
}

//Appコンポーネントを書き出し
export default App;