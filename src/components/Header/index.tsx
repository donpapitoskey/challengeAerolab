import React from 'react';
import {Container, Icon, Sidebar, CoinsContainer} from './styles';

interface Props {
  handleShowModal: (show: boolean) => void;
  name: string;
  points: number;
}

const Header: React.FC<Props> = ({handleShowModal, name, points}) => {
  return (
    <Container id="header-container">
      <Icon src="/icons/aerolab-logo.svg"></Icon>
      <Sidebar>
        <h3>{name}</h3>
        <CoinsContainer onClick={handleShowModal.bind(null, true)}>
          +{points}
          <img src="/icons/coin.svg" />{' '}
        </CoinsContainer>
      </Sidebar>
    </Container>
  );
};

export default Header;
