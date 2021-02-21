import React from 'react';
import {AvailableProducts, Container, Hr, NavButton, SortButton, Vr} from './styles';

interface Props {
  onlyNumbers?: boolean;
  tailIndex: number;
  handleIndexChange: (newTail: number) => void;
  handleOrderItems?: (orderType: string) => void;
}

const Navbar: React.FC<Props> = ({handleIndexChange, handleOrderItems, onlyNumbers = false, tailIndex}) => {
  return (
    <>
      <Container id="navbar-container">
        <AvailableProducts>{tailIndex} of 32 product</AvailableProducts>
        {!onlyNumbers && (
          <>
            <Vr />
            <p>Sort by:</p>
            <SortButton className="selected" onClick={handleOrderItems?.bind(null, 'recent')}>
              Most recent
            </SortButton>
            <SortButton onClick={handleOrderItems?.bind(null, 'lowest')}>Lowest price</SortButton>
            <SortButton onClick={handleOrderItems?.bind(null, 'highest')}>Highest price</SortButton>
          </>
        )}
        <div className="navigation-arrows">
          {tailIndex > 16 && (
            <NavButton src="/icons/arrow-left.svg" onClick={handleIndexChange.bind(null, -16)} />
          )}

          <NavButton src="icons/arrow-right.svg" onClick={handleIndexChange.bind(null, 16)} />
        </div>
      </Container>
      <Hr />
    </>
  );
};

export default Navbar;
