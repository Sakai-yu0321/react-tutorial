import ReactDOM from 'react-dom'
import styled from 'styled-components';

//idがmodal-rootのエレメントを取得
const modalRoot = document.getElementById('modal-root');

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .5);
`

export const Modal = (props) => {
  //portal作成
  return ReactDOM.createPortal(
    <Container>
      {/*FormModalの子要素を取得して表示*/}
      { props.children }
    </Container>,
    modalRoot
  )
}