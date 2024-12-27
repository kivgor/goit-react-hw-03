import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
// import * as Yup from 'yup';
// import { ErrorMessage } from 'formik';

const initialValues = {
  username: '',
  number: '',
};

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   number: Yup.string()
//     .min(6, 'Too Short!')
//     .max(8, 'Too Long!')
//     .required('Required'),
// });

const ContactForm = ({ onFormSubmit }) => {  

  const handleSubmit = (values, actions) => {
    onFormSubmit(values);    
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label>
          Username
          <Field className={css.field} type="text" name="username" />
        </label>
        {/* <ErrorMessage className={css.error} name="username" component="span" /> */}

        <label>
          Number
          <Field className={css.field} type="text" name="number" />
        </label>
        {/* <ErrorMessage className={css.error} name="number" component="span" /> */}

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
