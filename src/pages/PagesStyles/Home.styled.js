import styled from 'styled-components';
export const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin: 30px;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  text-transform: uppercase;
  width: 400px;
  text-shadow: 1px 1px 2px #1e1e70;
`;

export const Image = styled.img`
  height: 80px;
  margin-top: 40px;
  margin-left:150px;
  animation-name: spin;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  
}
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  
`;
