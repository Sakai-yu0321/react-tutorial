//styled-componentsを読み込み
import styled from 'styled-components';
//useEffectとuseStateという関数をreactから読み込み
import { useState } from 'react';
//ListコンポーネントをList.jsから読み込み
import { List } from "./List";
//FormコンポーネントをForm.jsから読み込み
import { Form } from "./Form";
//LANGUAGESコンポーネントをconst/languages.jsから読み込み
import { getLanguages } from "./const/languages";
//higher-order-componentを読み込み
import { withLoading } from './hoc/withLoading';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' :'none' };
`

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
      <Header>
        <HeaderUl>
          {/*リストがクリックされたら、tabのstateをlistに変更*/}
          <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>リスト</HeaderLi>
          {/*フォームがクリックされたら、tabのstateをformに変更*/}
          <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </Header>
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