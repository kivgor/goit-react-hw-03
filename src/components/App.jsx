import { useEffect, useState } from 'react';
import css from './App.module.css/';
import 'modern-normalize';
import initPhonebook from '../initialList.json';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { customAlphabet } from 'nanoid';

function App() {
  const [inputName, setInputName] = useState('');
  // const [phonebook, setPhonebook] = useState(initPhonebook);

  const [phonebook, setPhonebook] = useState(() => {
    const savedPhonebook = JSON.parse(localStorage.getItem('saved-phonebook'));

    if (savedPhonebook !== null) {
      return savedPhonebook;
    }
    return initPhonebook;
  });

  useEffect(() => {
    localStorage.setItem('saved-phonebook', JSON.stringify(phonebook));
  }, [phonebook]);

const handleAdd = (values, actions) => {
  const nanoid = customAlphabet('1234567890', 5);
  const contactId = nanoid();

  const newContact = {
    id: contactId,
    name: values.username,
    number: values.number,
  };

  setPhonebook(prev => [...prev, newContact]);
  actions.resetForm();
};
  
  const handleDelete = id => {
    setPhonebook(prev => prev.filter(contact => contact.id !== id));
  };

  const handleSearch = evt => {
    setInputName(evt.target.value);
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
      <ContactForm handleAdd={handleAdd} />
      <SearchBox inputName={inputName} handleSearch={handleSearch} />
      <ContactList filteredList={filteredList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
