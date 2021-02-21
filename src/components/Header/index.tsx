import React from 'react';
import {Container, Icon, Sidebar, CoinsContainer} from './styles';

interface Props {
  name: string;
  points: number;
}

const Header: React.FC<Props> = ({name, points}) => {
  return (
    <Container id="header-container">
      <Icon src="/icons/aerolab-logo.svg"></Icon>
      <Sidebar>
        <CoinsContainer className="coins-addition">
          + <img src="/icons/coin.svg" />{' '}
        </CoinsContainer>
        <h3>{name}</h3>
        <CoinsContainer>
          {points}
          <img src="/icons/coin.svg" />{' '}
        </CoinsContainer>
      </Sidebar>
    </Container>
  );
};

export default Header;
