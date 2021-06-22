import React from 'react';
import styled from 'styled-components';

const LoadDiv = styled.div`
  padding: 36px;
`
/*データが取得され表示されるまでの間
  ロード中と言う表示をする為に、
  higher-order-component作成*/
export const withLoading = (WrappedComponent, fetchData) => {
  //クラスコンポーネント作成
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      //初期値nullのdataというstateを定義
      this.state = { data: null }
    }
    //mounting時の処理を定義
    componentDidMount() {
      //関数fetchを呼び出し
      this.fetch();
    }
    //fetchDataのpromiseの返り値が帰ってきたら、それをdataにsetState
    async fetch() {
      const data = await fetchData();
      this.setState({ data })
    }

    render () {
      //stateからdataを取り出し
      const { data } = this.state
      //ロード中のjsx
      const Loading = (
        <LoadDiv>ロード中...</LoadDiv>
      )
      //dataがあればコンポーネント表示、なければロード中を表示
      return data ? <WrappedComponent data={ data }/> : Loading;
    }
  }
  //クラス書き出し
  return HOC;
}