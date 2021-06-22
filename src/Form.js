//useStateをreactから読み込み
import {useState} from 'react';
import styled from 'styled-components';
import { Button } from './components/button';
import { TabBodyContainer } from './tab-body-container';

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`
const ButtonContainer = styled.div`
  margin-top: 24px;
`
const FormButton = styled(Button)`
  width: 120px;
`

//Formファンクションコンポーネントを定義
export const Form = ({ onAddLang }) => {
  //textのstateを定義
  const [text, setText] = useState('')
  //関数submitFormを定義
  const submitForm = (e) => {
    //フォームの内容が送信された際のデフォルトの動作をキャンセル
    e.preventDefault();
    //App.jsに定義した関数addLangをtextのstate（フォームに入力された値）を引数にして呼び出し
    onAddLang(text);
  }

  //JSX記述
  return (
    /*listと共通のcssを適用するため、
      子を受け取るコンポーネント（TabBodyContainer）に、
      titleとchildren（子要素）を渡して表示*/
    <TabBodyContainer title="新しい言語の追加">
      {/*フォームにsubmit処理を追加し、内容が送信されたときに関数submitFromを呼び出し*/}
      <form onSubmit={submitForm}>
        <div>
          <Label>言語</Label>
          <Input
          /*タイプは一行のテキスト入力欄*/
          type="text"
          /*初期値はtextのstate*/
          value={text}
          /*初期値が変更されたらtextのstateを変更された値に変更*/
          onChange={(e) => setText(e.target.value)}
          />
        </div>
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
      </form>
    </TabBodyContainer>
  )
}