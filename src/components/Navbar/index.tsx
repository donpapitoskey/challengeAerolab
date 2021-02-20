import React from 'react';
import {AvailableProducts, Container, Hr, SortButton, Vr} from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <Container id="navbar-container">
        <AvailableProducts>16 of 32 product</AvailableProducts>
        <Vr />
        <p>Sort by:</p>
        <SortButton className="selected">Most recent</SortButton>
        <SortButton>Lowest price</SortButton>
        <SortButton>Highest price</SortButton>
      </Container>
      <Hr />
    </>
  );
};

export default Navbar;
