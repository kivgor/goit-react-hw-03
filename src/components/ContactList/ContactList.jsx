import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ filteredList }) => {
  return (
    <>
      <ul className={css.list}>
        {filteredList.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
