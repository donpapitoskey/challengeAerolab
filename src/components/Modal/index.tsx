import React from 'react';
import {Container, Hotspot, ModalContainer, Button, Subtitle, Title} from './styles';

interface Props {
  handleShowModal: (show: boolean) => void;
}

const Modal: React.FC<Props> = ({handleShowModal}) => {
  return (
    <>
      <Container>
        <ModalContainer>
          <Title>Need some Coins?</Title>
          <Subtitle>Pick an option to get some!</Subtitle>
          <div className="buttons-container">
            <Button>
              +1000 <img src="/icons/coin.svg" />
            </Button>
            <Button>
              +5000 <img src="/icons/coin.svg" />
            </Button>
            <Button>
              +7000 <img src="/icons/coin.svg" />
            </Button>
          </div>
        </ModalContainer>
        <Hotspot onClick={handleShowModal.bind(null, false)} />
      </Container>
    </>
  );
};

export default Modal;
