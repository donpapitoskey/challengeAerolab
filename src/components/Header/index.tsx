import React from 'react';
import {Container, Icon, Sidebar, CoinsContainer} from './styles';

const Header: React.FC = () => {
  return (
    <Container id="header-container">
      <Icon src="/icons/aerolab-logo.svg"></Icon>
      <Sidebar>
        <CoinsContainer>
          + <img src="/icons/coin.svg" />{' '}
        </CoinsContainer>
        <h3>name</h3>
        <CoinsContainer>
          6000
          <img src="/icons/coin.svg" />{' '}
        </CoinsContainer>
      </Sidebar>
    </Container>
  );
};

export default Header;
