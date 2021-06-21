//useEffectとuseStateという関数をreactから読み込み
import { useEffect, useState } from 'react';
//ListコンポーネントをList.jsから読み込み
import { List } from "./List";
//FormコンポーネントをForm.jsから読み込み
import { Form } from "./Form";
//LANGUAGESコンポーネントをconst/languages.jsから読み込み
import { getLanguages } from "./const/languages";

function App() {
  //tabのstateを定義
  const [tab, setTab] = useState('list');
  //langsのstateを定義
  const [langs, setLangs] = useState([]);

  //ライフサイクルのmounting時にdだけ呼び出される関数useEffectを定義
  //useEffectの第一引数には行いたい処理(関数)を記述、第二引数には依存する変数を記述
  useEffect(() => {
    console.log('App.js:useEffect');
    fetchLanguages();
  }, [])

  //langsのstateに入っているLANGUAGESの配列をスプレッド(展開)して、
  //配列の最後に引数lang(Formコンポーネントの入力値)を追加して、
  //langsのstateに保存
  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  //非同期処理の完了を関数getLangs(言語情報の配列を表示)が終わるまで待ってから、それをstateに定義
  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages)
  }

  return (
    <div>
      <header>
        <ul>
          {/*リストがクリックされたら、tabのstateをlistに変更*/}
          <li onClick={() => setTab('list')}>リスト</li>
          {/*フォームがクリックされたら、tabのstateをformに変更*/}
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr/>
      {/*tabのstateがlistなら、Listコンポーネントを表示。そうでないなら、Formコンポーネントを表示*/}
      {/*Listコンポーネントにlangsのstate(言語情報の配列)を渡す*/}
      {/*Formコンポーネントに関数addLangを呼び出すプロパティonAddLangを渡す*/}
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

//Appコンポーネントを書き出し
export default App;