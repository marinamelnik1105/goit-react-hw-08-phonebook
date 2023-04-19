import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormField, Form, ErrorMessage, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { addContacts } from 'redux/operations';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().min(6).required(),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onSave = (values, actions) => {
    console.log(values);
    const isRepeadCheck = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (isRepeadCheck) {
      actions.resetForm();
      return alert(`${values.name} is already in contacts.`);
    }
    dispatch(addContacts(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={onSave}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
