//React.Componentをreactから読み込み
import React from "react"
import styled from 'styled-components';
import { TabBodyContainer } from "./tab-body-container";

const ListItem = styled.div`
  padding: 8px 16px;
  
  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

//React.Componentを継承するListクラスコンポーネントを定義
export class List extends React.Component {
  //ライフサイクルのunmount時に呼び出される関数を定義
  componentWillUnmount() {
    console.log('List.js:unmount');
  }
  render() {
    const { langs } = this.props
    //JSX記述
    return (
      /*formと共通のcssを適用するため、
        子を受け取るコンポーネント（TabBodyContainer）に、
        titleとchildren（子要素）を渡して表示*/
      <TabBodyContainer title="取扱言語リスト">
        {/*mapメソッドで言語の文字列を繰り返し表示*/}
        {
          langs.map((lang, index) => {
            return <ListItem key={index}>{lang}</ListItem>
          })
        }
      </TabBodyContainer>
    )
  }
}
