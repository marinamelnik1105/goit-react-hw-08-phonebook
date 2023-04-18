import { useAuth } from 'hooks';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// import { useEffect } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { GlobalStyle } from './GlobalStyle.styled';
// import { Layout } from './Layout.styled';
// import { fetchContacts } from 'redux/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getError, getIsLoading } from 'redux/contactsSlice';
// import { Shell } from './Shell.styed';

// export const App = () => {

// const isLoading = useSelector(getIsLoading);
// const error = useSelector(getError);
// const contacts = useSelector(getContacts);

// return (

// <Layout>
//   <Shell>
//     <GlobalStyle />
//     <h1>Phonebook</h1>
//     {/* <ContactForm />
//     <h2>Contacts</h2>
//     <Filter />
//     {isLoading && !error && <b>Request in progress...</b>}
//     {contacts && <ContactList />} */}
//   </Shell>
// </Layout>
//   );
// };
