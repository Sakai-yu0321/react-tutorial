//useStateをreactから読み込み
import {useState} from 'react';
import { Button } from './components/button';
import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container';
import { FormModal } from "./FormModal";
import { Hint } from './Hint';

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
//既存のコンポーネントを拡張
const FormButton = styled(Button)`
  width: 120px;
`

//Formファンクションコンポーネントを定義
export const Form = ({ onAddLang }) => {
  //textのstateを定義
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  //関数submitFormを定義
  const submitForm = (e) => {
    //フォームの内容が送信された際のデフォルトの動作をキャンセル
    e.preventDefault();
    setShowModal(true);
  }

  //JSX記述
  return (
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
          <Hint />
        </div>
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
      </form>

      {
        //trueかつtrueならFormModalを表示
        showModal &&
          <FormModal
            /*confirmプロパティに関数AddLangを指定、
            引数はtext(フォームの入力値)*/
            confirm={() => onAddLang(text)}
            /*cancelプロパティにshowModalのstateをfalseにする関数を指定*/
            cancel={() => setShowModal(false)}
          />
      }
    </TabBodyContainer>
  )
}