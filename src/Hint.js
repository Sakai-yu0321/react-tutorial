import styled from "styled-components"
import { useState, useRef, useEffect } from "react"

const HintContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 12px;

`

const HintInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #757575;
  width 24px;
  height: 24px;
  cursor: pointer;
`

const PopupContainer = styled.div`
  position: absolute;
  left: 88%;
  bottom: 12px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  outline: none;
  border-radius: 8px;
  padding: 8px;
  width: 140px;
`

export const Hint = () => {
  //state定義
  const [showPopup, setShowPopup] = useState(false);
  //ref定義nullで初期化 
  const ref = useRef(null);

  //mounting時とupdating時のライフサイクルで発生する処理
  useEffect(() => {
    //refが存在するならそのrefをフォーカスする
    if (ref.current) ref.current.focus();
  })
  return (
    <HintContainer>
      {/*クリックされたらポップアップを表示*/}
      <HintInner onClick={() => setShowPopup(true)}>
        ?
      </HintInner>
      {
        /*showPopupのstateがtrueならポップアップを表示*/
        showPopup && (
          /*要素自体のエレメントを取得しrefというプロパティで管理
            要素外をクリックしたらポップアップを非表示
            tabIndexを0にすることでフォーカスできるようにする*/
          <PopupContainer ref={ref} onBlur={() => setShowPopup(false)} tabIndex={0} >
            言語の名前です
          </PopupContainer>
        )
      }
    </HintContainer>
  )
}