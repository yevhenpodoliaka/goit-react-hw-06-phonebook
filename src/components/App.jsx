import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState} from 'react';
import ContactForm from './ContactForm/ContactForm';
import Contactlist from './ContactList/ContactList';
import Filter from './Filter/Filter';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(()=>{return JSON.parse(localStorage.getItem('contacts'))??startContacts});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts',JSON.stringify(contacts))
  }, [contacts])

  const addContact = contact => {
    const name = contact.name.toLowerCase();
    const hasContact = contacts.find(el => el.name.toLowerCase() === name);
    if (hasContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId =>
    setContacts(contacts.filter(contact => contact.id !== contactId))
    
  
  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisiblecontacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisiblecontacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChahgeFilter={onChangeFilter} />

      <h2>Contacts</h2>
      <Contactlist contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
