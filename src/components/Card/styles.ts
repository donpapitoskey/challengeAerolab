import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {darkGray, gray44} = theme.colors;

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
  right: 1rem;
  width: 2.5rem;
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
