import React from 'react';
import {Container, Icon, Sidebar, CoinsContainer} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Icon>icon</Icon>
      <Sidebar>
        <CoinsContainer>more coins</CoinsContainer>
        <h3>name</h3>
        <CoinsContainer>Current</CoinsContainer>
      </Sidebar>
    </Container>
  );
};

export default Header;
