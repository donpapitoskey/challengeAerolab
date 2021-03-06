import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {gray80, gray93, pureOrange} = theme.colors;

export const Container = styled.div`
  min-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: white;
`;

export const Icon = styled.img`
  width: 1.5rem;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin: 0.5rem;
  }
  h3 {
    font-size: 1rem;
    &:hover {
      cursor: pointer;
      color: ${pureOrange};
    }
  }
`;

export const CoinsContainer = styled.div`
  background-color: ${gray93};
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
