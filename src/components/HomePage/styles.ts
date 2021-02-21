import styled from 'styled-components';
import {theme} from 'src/utils/theme';

const {veryLightGray} = theme.background;

export const CatalogContainer = styled.main`
  min-height: 100vh;
  background-color: ${veryLightGray};
  overflow-y: auto;
  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 50vh;
    padding: 0 3rem;
  }
`;
