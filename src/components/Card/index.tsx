import React from 'react';
import {Category, CoinContainer, Container, Icon, Image, Modal, Price, Redeem, Name} from './styles';
import {Product} from 'src/interfaces/product';

interface Props {
  product: Product;
  points: number;
}

const Card: React.FC<Props> = ({product, points}) => {
  const {name, img, category, cost} = product;
  const redeemable = points >= cost;
  return (
    <Container id="card">
      {redeemable ? (
        <Icon src="/icons/buy-blue.svg" />
      ) : (
        <CoinContainer>
          {`You need ${cost - points} `}
          <img src="/icons/coin.svg" />{' '}
        </CoinContainer>
      )}
      <Image src={img.url} />
      <hr />
      <Category>{category}</Category>
      <Name>{name}</Name>
      {redeemable && (
        <Modal>
          <Icon src="/icons/buy-white.svg" />
          <Price>
            <p>{cost}</p>
            <img src="/icons/coin.svg" />
          </Price>
          <Redeem>Redeem now</Redeem>
        </Modal>
      )}
    </Container>
  );
};

export default Card;
