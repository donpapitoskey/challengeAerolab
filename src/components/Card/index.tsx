import React from 'react';
import {Category, Container, Icon, Image, Modal, Price, Redeem, Name} from './styles';
import {Product} from 'src/interfaces/product';

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({product}) => {
  const {name, img, category, cost} = product;

  return (
    <Container id="card">
      <Icon src="/icons/buy-blue.svg" />
      <Image src={img.url} />
      <hr />
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Modal>
        <Icon src="/icons/buy-white.svg" />
        <Price>
          <p>{cost}</p>
          <img src="/icons/coin.svg" />
        </Price>
        <Redeem>Redeem now</Redeem>
      </Modal>
    </Container>
  );
};

export default Card;
