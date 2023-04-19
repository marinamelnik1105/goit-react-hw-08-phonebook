import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ContainerForm, Form } from '../Form.styled';
import { Button } from 'components/ContactList/ContactList.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <Button type="submit">Log In</Button>
      </Form>
    </ContainerForm>
  );
};
