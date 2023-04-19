import styled from 'styled-components';
export const ContactData = styled.p`
  display: inline-block;
  margin-right: 5px;
`;
export const List = styled.ul`
  width: 400px;
`;
export const Item = styled.li`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 10px 0;
`;
export const NameContact = styled.p`
  font-weight: 700;
`;
export const Button = styled.button`
  width: 100px;
  border-radius: 4px;
  border: #1f2868 1px solid;
  background-color: #6bc3b2;
  padding: 5px;
  :hover {
    background-color: #1f2868;
    color: #fff;
  }
`;
