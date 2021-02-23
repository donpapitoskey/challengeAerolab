import React from 'react';
import {Container, Icon, Sidebar, CoinsContainer} from './styles';

interface Props {
  handleShowHistory: () => void;
  handleShowModal: (show: boolean) => void;
  name: string;
  points: number;
}

const Header: React.FC<Props> = ({handleShowHistory, handleShowModal, name, points}) => {
  return (
    <Container id="header-container">
      <Icon src="/icons/aerolab-logo.svg"></Icon>
      <Sidebar>
        <h3 onClick={handleShowHistory}>{name}</h3>
        <CoinsContainer onClick={handleShowModal.bind(null, true)}>
          +{points}
          <img src="/icons/coin.svg" />{' '}
        </CoinsContainer>
      </Sidebar>
    </Container>
  );
};

export default Header;
