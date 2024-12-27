import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { customAlphabet } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ onFormSubmit }) => {
  const nanoid = customAlphabet('1234567890', 5);
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();  

  const INITIAL_VALUES = {
    username: '',
    number: '',
  };

  const [formData, setFormData] = useState(INITIAL_VALUES);

  const handleSubmit = (values, actions) => {
    onFormSubmit(values);        
    setFormData(INITIAL_VALUES);
    actions.resetForm();
  };

  return (
    <Formik initialValues={formData} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={nameFieldId}
        />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={css.field}
          type="text"
          name="number"
          id={numberFieldId}
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
