import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';

const ListItem = styled.div`
  padding: 8px 16px;
  
  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

//引数にApp.jsのlangのstate(言語情報の配列)を受け取る、
//Listファンクションコンポーネントを定義
export const List = ({langs}) => {
  return (
    <TabBodyContainer title="取扱言語リスト">
      {/*言語情報の配列をmapメソッドでインデックス番号順に繰り返し表示*/}
      {
        langs.map((lang, index) => {
          return <ListItem key={index}>{lang}</ListItem>
        })
      }
    </TabBodyContainer>
  )
}
