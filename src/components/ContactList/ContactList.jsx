import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contactsList }) => {
  return (
    <>
      <ul className={css.list}>
        {contactsList.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
