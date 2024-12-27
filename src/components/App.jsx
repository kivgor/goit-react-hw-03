import { useEffect, useState } from 'react';
import css from './App.module.css/';
import 'modern-normalize';
import phonebook from '../initialList.json';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

function App() {
  const [inputName, setInputName] = useState('');

  const handleChange = evt => {
    setInputName(evt.target.value);
  };

  const filteredList = phonebook.filter(contact =>
    contact.name.toLowerCase().trim().includes(inputName.toLowerCase().trim())
  );

  useEffect(() => {}, [inputName]);

  const onFormSubmit = data => {
    console.log(data);
    console.log(data.username);
    console.log(data.number);
  };

  return (
    <div className={css.app}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onFormSubmit={onFormSubmit} />
      <SearchBox inputName={inputName} handleChange={handleChange} />
      <ContactList filteredList={filteredList} />
    </div>
  );
}

export default App;
