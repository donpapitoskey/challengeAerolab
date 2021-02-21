import React from 'react';
import {Container, Hotspot, ModalContainer, Button, Subtitle, Title} from './styles';

interface Props {
  handleCoinsAcquisition: (quantity: number) => void;
  handleShowModal: (show: boolean) => void;
}

const Modal: React.FC<Props> = ({handleCoinsAcquisition, handleShowModal}) => {
  return (
    <>
      <Container>
        <ModalContainer>
          <Title>Need some Coins?</Title>
          <Subtitle>Pick an option to get some!</Subtitle>
          <div className="buttons-container">
            <Button onClick={handleCoinsAcquisition.bind(null, 1000)}>
              +1000 <img src="/icons/coin.svg" />
            </Button>
            <Button onClick={handleCoinsAcquisition.bind(null, 5000)}>
              +5000 <img src="/icons/coin.svg" />
            </Button>
            <Button onClick={handleCoinsAcquisition.bind(null, 7000)}>
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
