import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {modalBackground} = theme.background;
const {darkGray, gray93, gray44, gray80, veryDarkGray} = theme.colors;

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;

  background-color: ${modalBackground};
  .cards-disposal {
    align-items: flex-start;
  }
  &.buttons-container {
    display: flex;
    flex-direction: column;
  }
  &.other {
    align-items: center;
  }
  @media (min-width: 650px) {
    .cards-disposal {
      align-items: flex-start;
    }
    .buttons-container {
      display: flex;
      flex-direction: row;
    }
    &.other {
      align-items: center;
    }
  }
`;

export const Hotspot = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${gray93};
  border-radius: 5px;
  z-index: 2;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 650px) {
    padding: 5rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Subtitle = styled.h2`
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 1rem 0;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 25px;
  outline: none;
  font-size: 2rem;
  background-color: ${gray44};
  color: white;
  transition: all 100ms ease;
  &:focus {
    outline: none;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      background-color: ${gray80};
    }
  }
  @media (min-width: 650px) {
    margin: 0 0 0 2rem;
  }
`;

export const CardContainer = styled.div`
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
