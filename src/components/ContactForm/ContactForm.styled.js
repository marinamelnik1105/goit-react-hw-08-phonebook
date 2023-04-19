import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';
export const Form = styled(FormikForm)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background-color: rgb(255 255 255 / 50%);
  justify-content: space-evenly;
  height: 250px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;
export const Button = styled.button`
  width: 120px;
  border-radius: 4px;
  border: #1f2868 1px solid;
  background-color: #6bc3b2;
  padding: 5px;
  :hover {
    background-color: #1f2868;
    color: #fff;
  }
`;
