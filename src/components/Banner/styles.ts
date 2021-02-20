import styled from 'styled-components';

interface ContainerProps {
  src: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  position: relative;
  min-height: 60vh;
  padding: 0 3rem;
  color: white;
  h1 {
    position: absolute;
    bottom: 2rem;
  }
`;
