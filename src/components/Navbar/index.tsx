import React from 'react';
import {AvailableProducts, Container, Hr, NavButton, SortButton, Vr} from './styles';

interface Props {
  onlyNumbers?: boolean;
  tailIndex: number;
  currentSort?: string;
  handleIndexChange: (newTail: number) => void;
  handleOrderItems?: (orderType: string) => void;
}

const Navbar: React.FC<Props> = ({
  currentSort,
  handleIndexChange,
  handleOrderItems,
  onlyNumbers = false,
  tailIndex,
}) => {
  return (
    <>
      <Container id="navbar-container">
        <AvailableProducts>{tailIndex} of 32 product</AvailableProducts>
        {!onlyNumbers && (
          <>
            <Vr />
            <p>Sort by:</p>
            <div className="buttons-container">
              <SortButton
                className={currentSort === 'recent' ? 'selected' : ''}
                onClick={handleOrderItems?.bind(null, 'recent')}>
                Most recent
              </SortButton>
              <SortButton
                className={currentSort === 'lowest' ? 'selected' : ''}
                onClick={handleOrderItems?.bind(null, 'lowest')}>
                Lowest price
              </SortButton>
              <SortButton
                className={currentSort === 'highest' ? 'selected' : ''}
                onClick={handleOrderItems?.bind(null, 'highest')}>
                Highest price
              </SortButton>
            </div>
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
