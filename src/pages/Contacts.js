import { Triangle } from 'react-loader-spinner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/contactsSlice';
import ContactList from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import {
  ContactsContainer,
  ContactsTitle,
  Container,
  LoaderContainer,
  Title,
} from './PagesStyles/Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Title>Phonebook</Title>
      <Container>
        <ContactForm />
        <ContactsContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          {isLoading && !error && (
            <LoaderContainer>
              <Triangle
                height="80"
                width="80"
                color="#1f2868"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </LoaderContainer>
          )}
          {contacts && <ContactList />}
        </ContactsContainer>
      </Container>
    </>
  );
}
