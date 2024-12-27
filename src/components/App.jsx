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
 
  const onFormSubmit = data => {
    const nanoid = customAlphabet('1234567890', 5);
    const contactId = nanoid();
    // console.log(data);
    // console.log(data.username);
    // console.log(data.number);
    // console.log(contactId);
    const newContact = {
      id: contactId,
      name: data.username,
      number: data.number,
    };
    console.log('newContact: ',newContact);
    initPhonebook.push(newContact);    
    setPhonebook(initPhonebook);
    console.log(phonebook);
  };

  const filteredList = phonebook.filter(contact =>
    contact.name.toLowerCase().trim().includes(inputName.toLowerCase().trim())
  );

  // useEffect(() => {
  //   document.title = `You update ${inputName}`;
  // }, [inputName]);

  // useEffect(() => {
  //   document.title = `You update ${phonebook}`;
  // }, [phonebook]);

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
