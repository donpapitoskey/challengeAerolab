import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {modalBackground} = theme.background;
const {gray93, gray44, gray80} = theme.colors;

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${modalBackground};
  z-index: 3;
  .buttons-container {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 650px) {
    .buttons-container {
      flex-direction: row;
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
  padding: 2rem;
  background-color: ${gray93};
  border-radius: 5px;
  z-index: 2;
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
  &:hover {
    cursor: pointer;
    background-color: ${gray80};
  }
  @media (min-width: 650px) {
    margin: 0 0 0 2rem;
  }
`;
