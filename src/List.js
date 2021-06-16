// export const List = (props) => {
//   const title = props.title;
//   return (
//     <div>
//       <h4>{ title }</h4>
//       <div>リストです</div>
//     </div>
//   )
// }

// ↑は↓のように書くこともできる。
// propsを省略し
// オブジェクトのキーであるタイトルを関数の引数に指定して呼び出す
// 短く簡潔に書けるからよき！

export const List = ({title}) => {
  return (
    <div>
      <h4>{ title }</h4>
      <div>リストです</div>
    </div>
  )
}
