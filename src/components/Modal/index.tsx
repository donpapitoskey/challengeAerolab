import React from 'react';
import {Container, Hotspot, ModalContainer, Button, Subtitle, Title} from './styles';

interface Props {
  coins: number;
  handleCoinsAcquisition: (quantity: number) => void;
  handleShowModal: (show: boolean) => void;
  showFeedback: string;
}

const Modal: React.FC<Props> = ({coins, handleCoinsAcquisition, handleShowModal, showFeedback}) => {
  const renderContent = () => {
    switch (showFeedback) {
      case 'redeemed':
        return (
          <>
            <Title>Coins redeemed!</Title>
            <Subtitle>{`Now you have ${coins} coins`}</Subtitle>
          </>
        );
      case 'added':
        return (
          <>
            <Title>Coins added!</Title>
            <Subtitle>{`Now you have ${coins} coins`}</Subtitle>
          </>
        );
      default:
        return (
          <>
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
          </>
        );
    }
  };
  return (
    <>
      <Container>
        <ModalContainer>{renderContent()}</ModalContainer>
        <Hotspot onClick={handleShowModal.bind(null, false)} />
      </Container>
    </>
  );
};

export default Modal;
