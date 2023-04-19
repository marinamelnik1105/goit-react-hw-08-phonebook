import { Helmet } from 'react-helmet';
import phonebook from '../images/phonebook1.jpg';
import { Container, Image, Title } from './PagesStyles/Home.styled';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Container>
        <Title>Welcome to your phonebook</Title>{' '}
        <div>
          <Image src={phonebook} alt="phonebook" />
        </div>
      </Container>
    </>
  );
}
