//useEffectとuseStateという関数をreactから読み込み
import { useState } from 'react';
//ListコンポーネントをList.jsから読み込み
import { List } from "./List";
//FormコンポーネントをForm.jsから読み込み
import { Form } from "./Form";
import styled from 'styled-components';
//LANGUAGESコンポーネントをconst/languages.jsから読み込み
import { getLanguages } from "./const/languages";
//higher-order-componentを読み込み
import { withLoading } from './hoc/withLoading';
import { Header } from './Header';


function App({ data }) {
  //tabのstateを定義
  const [tab, setTab] = useState('list');
  //langsのstateを定義
  const [langs, setLangs] = useState(data);

  /*langsのstateに入っているLANGUAGESの配列をスプレッド(展開)して、
    配列の最後に引数lang(Formコンポーネントの入力値)を追加して、
    langsのstateに保存*/
  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  return (
    <div>
      <Header tab={tab} setTab={setTab}/>
      {/*tabのstateがlistなら、Listコンポーネントを表示。そうでないなら、Formコンポーネントを表示
         Listコンポーネントにlangsのstate(言語情報の配列)を渡す
         Formコンポーネントに関数addLangを呼び出すプロパティonAddLangを渡す*/}
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

//Appコンポーネントと関数getLanguagesを引数に渡してhigher-order-componentを呼び出し&書き出し
export default withLoading(App, getLanguages);