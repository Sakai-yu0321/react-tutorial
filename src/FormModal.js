import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Modal } from './components/modal';
import { Button } from './components/button';

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
`

export class FormModal extends React.Component {
  render () {
    const { cancel, confirm } = this.props;
    return (
      <Modal>
        <Container>
          <ButtonWrapper>
            <div>本当に作成しますか？</div>
            <Button onClick={cancel}>cancel</Button>
            <Button onClick={confirm}>ok</Button>
          </ButtonWrapper>
        </Container>
      </Modal>
    )
  }
}