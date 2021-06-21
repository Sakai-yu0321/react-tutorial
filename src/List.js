//useEffectをreactから呼び出し
import { useEffect } from 'react';

//引数にApp.jsのlangのstate(言語情報の配列)を受け取る、
//Listファンクションコンポーネントを定義
export const List = ({langs}) => {
  //ライフサイクル
  useEffect(() => {
    //mounting時の処理
    console.log('List.js:useEffect');
    return () => {
      //unmounting時の処理
      console.log('List.js:useEffect:unmount');
    }
  })
  return (
    <div>
      {/*言語情報の配列をmapメソッドでインデックス番号順に繰り返し表示*/}
      {
        langs.map((lang, index) => {
          return <div key={index}>{lang}</div>
        })
      }
    </div>
  )
}
