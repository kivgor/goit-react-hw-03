import { HiUser, HiPhone } from 'react-icons/hi2';
import css from './Contact.module.css';

const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <>
      <li className={css.listItem}>
        <div className={css.buttonThumb}>
          <div className={css.iconThumb}>
            <HiUser size="24" />
            <p className={css.name}>{name}</p>
          </div>
          <div className={css.iconThumb}>
            <HiPhone size="24" />
            <p>{number}</p>
          </div>
        </div>
        <button
          type="button"
          className={css.button}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
