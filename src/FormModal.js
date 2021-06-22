import styled from "styled-components"
import { Modal } from "./components/modal"
import { Button } from "./components/button";

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`

export const FormModal = ({ confirm, cancel }) => {
  return (
    //Modal呼び出し
    <Modal>
      <Container>
        <div>本当に作成しますか？</div>
        <ButtonWrapper>
          {/*クリックされたらshowModalのstateをfalseに変更*/}
          <Button onClick={ cancel }>cancel</Button>
          {/*クリックされたら
            関数AddLang(フォームの入力値を保存してtabのstateをlistに変更)を実行*/}
          <Button onClick={ confirm }>ok</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  )
}
