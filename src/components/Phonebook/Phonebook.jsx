import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleCreateContact = (name, number) => {
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const handleRemoveContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const handleFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleCreateContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        list={handleFilterContacts()}
        onRemove={handleRemoveContact}
      />
    </div>
  );
};

export default Phonebook;
