import React from 'react';
import {AvailableProducts, Container, SortButton, Vr} from './styles';

const Navbar: React.FC = () => {
  return (
    <Container id="navbar-container">
      <AvailableProducts>16 of 32 product</AvailableProducts>
      <Vr />
      <p>Sort by:</p>
      <SortButton>Most recent</SortButton>
      <SortButton>Lowest price</SortButton>
      <SortButton>Highest price</SortButton>
    </Container>
  );
};

export default Navbar;
