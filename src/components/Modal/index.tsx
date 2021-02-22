import React from 'react';
import {
  CardContainer,
  Category,
  Container,
  Hotspot,
  Image,
  ModalContainer,
  Name,
  Button,
  Subtitle,
  Title,
} from './styles';
import {Product} from 'src/interfaces/product';

interface Props {
  coins: number;
  handleCoinsAcquisition: (quantity: number) => void;
  handleShowModal: (show: boolean) => void;
  purchased: Product[];
  showPurchased: boolean;
  showFeedback: string;
}

const Modal: React.FC<Props> = ({
  coins,
  handleCoinsAcquisition,
  handleShowModal,
  purchased,
  showPurchased,
  showFeedback,
}) => {
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

  const renderPurchased = () => {
    return (
      <>
        <Title>History</Title>
        <p>
          {`These are the items you 
          have already purchased.`}
        </p>
        {purchased.map((item) => {
          return (
            <CardContainer key={item._id}>
              <Image src={item.img.url} />
              <hr />
              <Category>{item.category}</Category>
              <Name>{item.name}</Name>
            </CardContainer>
          );
        })}
      </>
    );
  };
  return (
    <>
      <Container className={showPurchased ? 'cards-disposal' : 'other'}>
        <ModalContainer>{showPurchased ? renderPurchased() : renderContent()}</ModalContainer>
        <Hotspot onClick={handleShowModal.bind(null, false)} />
      </Container>
    </>
  );
};

export default Modal;
