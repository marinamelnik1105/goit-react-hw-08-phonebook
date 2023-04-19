import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  text-transform: uppercase;
  margin: 30px;
  text-shadow: #1e1e70 1px 1px 2px;
`;
export const ContactsContainer = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: rgb(255 255 255 / 50%);
  padding: 20px;
`;
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const ContactsTitle = styled.h3`
  text-align: center;
  margin: 5px;
`;
