import React from 'react';
import {isMobile} from 'src/utils/constants';
import {Category, CoinContainer, Container, Image, Icon, Modal, Price, Redeem, Name} from './styles';
import {Product} from 'src/interfaces/product';

interface Props {
  handleCoinsRedeem: (id: string, price: number, product: Product) => void;
  handleShowModal: (show: boolean) => void;
  product: Product;
  points: number;
}

const Card: React.FC<Props> = ({handleCoinsRedeem, handleShowModal, product, points}) => {
  const {name, img, category, cost, _id} = product;
  const redeemable = points >= cost;
  const mobile = isMobile();
  return (
    <Container id="card">
      {redeemable ? (
        <Icon src="/icons/buy-blue.svg" />
      ) : (
        <CoinContainer onClick={handleShowModal.bind(null, true)}>
          {`You need ${cost - points} `}
          <img src="/icons/coin.svg" />{' '}
        </CoinContainer>
      )}
      <Image className="improved" width={'90%'} height={'200'} src={img.url} />
      <hr />
      <Category>{category}</Category>
      <Name>{name}</Name>
      {mobile && redeemable && (
        <>
          <Price>
            <p>{cost}</p>
            <img src="/icons/coin.svg" />
          </Price>
          <Redeem onClick={handleCoinsRedeem.bind(null, _id, cost, product)}>Redeem now</Redeem>
        </>
      )}
      {redeemable && !mobile && (
        <Modal>
          <Icon src="/icons/buy-white.svg" />
          <Price>
            <p>{cost}</p>
            <img src="/icons/coin.svg" />
          </Price>
          <Redeem onClick={handleCoinsRedeem.bind(null, _id, cost, product)}>Redeem now</Redeem>
        </Modal>
      )}
    </Container>
  );
};

export default Card;
