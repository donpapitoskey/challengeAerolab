import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {veryLightGray} = theme.background;

export const CatalogContainer = styled.main`
  min-height: 100vh;
  background-color: ${veryLightGray};
`;
