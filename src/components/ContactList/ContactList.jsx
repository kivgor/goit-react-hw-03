import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ filteredList, handleDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {filteredList.map(contact => (
          <Contact
            {...contact}
            key={contact.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
