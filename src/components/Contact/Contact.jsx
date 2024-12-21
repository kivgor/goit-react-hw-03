import { HiUser, HiPhone } from 'react-icons/hi2';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  return (
    <>
      <li className={css.listItem}>
        <div className={css.buttonThumb}>
          <div className={css.iconThumb}>
            <HiUser size="24" />
            <p>{contact.name}</p>
          </div>
          <div className={css.iconThumb}>
            <HiPhone size="24" />
            <p>{contact.number}</p>
          </div>
        </div>
        <button type="button" className={css.button}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
