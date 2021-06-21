//React.Componentをreactから読み込み
import React from "react"
import styled from 'styled-components';

const Component = styled.div`
  padding: 12px 64px;
`

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
      <Component>
        {/*mapメソッドで言語の文字列を繰り返し表示*/}
        {
          langs.map((lang, index) => {
            return <ListItem key={index}>{lang}</ListItem>
          })
        }
      </Component>
    )
  }
}
