import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {gray93, gray80, vividCyan} = theme.colors;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3rem;
`;

export const AvailableProducts = styled.h3``;

export const SortButton = styled.button`
  background-color: ${gray93};
  border-radius: 15px;
  border: transparent;
  padding: 0.4rem 1rem;
  margin: 0 1rem;
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
`;

export const Vr = styled.hr`
  margin: 0 1rem;
  width: 1px;
  height: 2rem;
`;

export const Hr = styled.hr`
  margin: 0 3rem;
`;
