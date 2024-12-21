// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import contactsList from '../contactsList.json';
import ContactList from './ContactList/ContactList';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Phonebook</h1>
      {/* // <ContactForm />
      // <SearchBox /> */}
      <ContactList contactsList={contactsList} />
    </>
  );
}

export default App;
