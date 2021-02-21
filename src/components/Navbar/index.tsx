import React from 'react';
import {AvailableProducts, Container, Hr, SortButton, Vr} from './styles';

interface Props {
  onlyNumbers?: boolean;
}

const Navbar: React.FC<Props> = ({onlyNumbers = false}) => {
  return (
    <>
      <Container id="navbar-container">
        <AvailableProducts>16 of 32 product</AvailableProducts>
        {!onlyNumbers && (
          <>
            <Vr />
            <p>Sort by:</p>
            <SortButton className="selected">Most recent</SortButton>
            <SortButton>Lowest price</SortButton>
            <SortButton>Highest price</SortButton>
          </>
        )}
      </Container>
      <Hr />
    </>
  );
};

export default Navbar;
