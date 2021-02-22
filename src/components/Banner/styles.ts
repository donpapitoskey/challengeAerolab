import styled from 'styled-components';

interface ContainerProps {
  src: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  position: relative;
  height: 8rem;
  color: white;
  padding: 0 1rem;
  h1 {
    position: absolute;
    bottom: 0rem;
  }
  @media (min-width: 650px) {
    background-size: cover;
    min-height: 60vh;
    padding: 0 3rem;
    h1 {
      bottom: 2rem;
    }
  }
`;
