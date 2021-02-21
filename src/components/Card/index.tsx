import React from 'react';
import {Category, Container, Icon, Image, Name} from './styles';
import {Product} from 'src/interfaces/product';

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({product}) => {
  const {name, img, category} = product;
  return (
    <Container id="card">
      <Image src={img.url} />
      <hr />
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Icon src="/icons/buy-blue.svg" />
    </Container>
  );
};

export default Card;
