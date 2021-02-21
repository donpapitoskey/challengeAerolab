import React from 'react';
import {Container, Hotspot, ModalContainer, Button, Subtitle, Title} from './styles';

const Modal: React.FC = () => {
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
        <Hotspot />
      </Container>
    </>
  );
};

export default Modal;
