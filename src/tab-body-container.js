import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px 64px;
`

export class TabBodyContainer extends React.Component {
  render() {
    /*thisの中にあるpropsからchildrenとtitleを取り出し
    thisの中身はtabから呼び出されたかformから呼び出されたかでかわる
    childrenは子要素のこと*/
    const { children, title } = this.props;
    return (
      <Container>
        {/*タイトル表示*/}
        <h4>{ title }</h4>
        {/*子要素表示*/}
        { children }
      </Container>
    );
  }
}