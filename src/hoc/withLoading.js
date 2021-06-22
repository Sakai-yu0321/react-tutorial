//styled-componentsを読み込み
import styled from "styled-components";
//useEffect, useStateをreactから読み込み
import { useEffect, useState } from "react";

const LoadDiv = styled.div`
  padding: 36px;
`

//WrappedComponent, fetchDataを引数にとるhigher-order-componentを作成
export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    //dataと言うstateを定義、初期値はnull
    const [data, setData] = useState(null);

    //mounting時に関数fetchを呼び出すライフサイクルを定義
    useEffect(() => {
      fetch();
    }, [])

    //fetchDataのpromiseが完了したらその返り値をdataのstateにセット
    const fetch = async () => {
      const data = await fetchData();
      setData(data)
    }

    //ロード中と表示するjsxを記述
    const Loading = (
      <LoadDiv>ロード中...</LoadDiv>
    )

    //dataが存在するならWrappedComponentを表示、存在しないならLoading（ロード中）を表示
    return data ? <WrappedComponent data={data}/> : Loading;
  }
}