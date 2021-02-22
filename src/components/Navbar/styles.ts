import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {gray38, gray93, gray80, vividCyan} = theme.colors;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  flex-wrap: wrap;
  .navigation-arrows {
    position: absolute;
    right: 1rem;
    top: 0.8rem;
  }
  .buttons-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow-x: auto;
    margin: 0 0 1rem;
  }
  p {
    min-width: 4rem;
  }
  @media (min-width: 650px) {
    padding: 0 3rem;
    .navigation-arrows {
      margin: 0 3rem 0;
    }
    .buttons-container {
      margin: 0;
    }
  }
`;

export const AvailableProducts = styled.h3`
  font-size: 1rem;
  color: ${gray38};
  min-width: 8rem;
`;

export const SortButton = styled.button`
  background-color: ${gray93};
  border-radius: 15px;
  border: transparent;
  padding: 0.4rem 0.5rem;
  min-width: 6rem;
  margin: 0 0.5rem 0 0;
  &:focus {
    outline: none;
  }
  &.selected {
    color: white;
    background-color: ${vividCyan};
    &:hover {
      cursor: default;
      color: white;
      background-color: ${vividCyan};
    }
  }
  &:hover {
    cursor: pointer;
    color: black;
    background-color: ${gray80};
  }
  @media (min-width: 650px) {
    margin: 0 1rem;
    padding: 0.4rem 1rem;
  }
`;

export const NavButton = styled.img`
  width: 2rem;
  margin: 0 0 0 0.3rem;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 650px) {
    margin: 0 0 0 1rem;
  }
`;

export const Vr = styled.hr`
  margin: 0 0.5rem;
  width: 1px;
  height: 2rem;
  @media (min-width: 650px) {
    margin: 0 1rem;
  }
`;

export const Hr = styled.hr`
  margin: 0 3rem;
`;
