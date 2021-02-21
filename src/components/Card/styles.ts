import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {darkGray, gray44, gray80, gray93, veryDarkGray, vividCyan86} = theme.colors;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  box-shadow: 3pt 3pt 3pt #707070;
  hr {
    width: 100%;
    color: ${gray44};
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  opacity: 1;
`;

export const CoinContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 1;
  background-color: ${veryDarkGray};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  padding: 0.3rem 0.5rem;
  transition: all 100ms ease;
  &:hover {
    cursor: pointer;
    background-color: ${gray80};
  }
  img {
    margin: 3px 0 0 0.2rem;
    width: 1rem;
  }
`;

export const Image = styled.img`
  width: 90%;
  align-self: center;
`;

export const Category = styled.p`
  color: ${darkGray};
  margin: 0;
`;

export const Name = styled.p`
  margin: 0;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  opacity: 0;
  background-color: transparent;
  transition: all 100ms ease;
  &:hover {
    opacity: 1;
    cursor: pointer;
    background-color: ${vividCyan86};
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0 0.8rem;
  p {
    color: white;
    font-size: 2rem;
    margin: 0;
  }
  img {
    width: 2rem;
    margin: 0.5rem 0 0 0.7rem;
  }
`;

export const Redeem = styled.button`
  width: 80%;
  padding: 0.5rem 0;
  border-radius: 15px;
  background-color: white;
  color: ${gray44};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
