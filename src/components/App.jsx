import { useState } from 'react';
import css from './App.module.css/';
import 'modern-normalize';
import initPhonebook from '../initialList.json';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { customAlphabet } from 'nanoid';

function App() {
  const [inputName, setInputName] = useState('');
  const [phonebook, setPhonebook] = useState(initPhonebook);

  const handleChange = evt => {
    setInputName(evt.target.value);
  };

  const handleSubmit = (values, actions) => {
    const nanoid = customAlphabet('1234567890', 5);
    const contactId = nanoid();

    const newContact = {
      id: contactId,
      name: values.username,
      number: values.number,
    };

    initPhonebook.push(newContact);
    const newPhonebook = initPhonebook.slice();
    setPhonebook(newPhonebook);
    // console.log(newPhonebook);
    actions.resetForm();
  };

  const filteredList = phonebook.filter(contact =>
    contact.name.toLowerCase().trim().includes(inputName.toLowerCase().trim())
  );

  // useEffect(() => {
  //   document.title = `You update ${inputName}`;
  // }, [inputName]);

  return (
    <div className={css.app}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox inputName={inputName} handleChange={handleChange} />
      <ContactList filteredList={filteredList} />
    </div>
  );
}

export default App;
