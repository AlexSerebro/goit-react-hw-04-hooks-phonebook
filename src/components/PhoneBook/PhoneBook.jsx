import style from './PhoneBook.module.css'
import {  useState, useEffect } from 'react'
import { Section } from '../Section/';
import  {Form}  from '../Form';
import { Contacts } from './Contacts'
import { Filter } from "../Filter";
import shortid from "shortid";

// const CONTACT_LIST = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export function PhoneBook() {
  const [contacts, setContacts] = useState(()=>{return JSON.parse(window.localStorage.getItem('contacts')) ?? []});
  const [filter, setFilter] = useState('');
  
  useEffect(() => { window.localStorage.setItem('contacts',JSON.stringify(contacts)) },[contacts])
 
  const addContact = (name, number) => {
    if (
      contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`You have already had ${name} in your contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name: name, 
      number: number,
     };
    setContacts(prevState => [...prevState, contact])
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value );
  };

  const getVisibleContacts = () => {
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };
  
  const deleteContact = (contactId) => {
    setContacts((prevState) => 
      prevState.filter((contact) => contact.id !== contactId),
    );
  };

  return (
      <Section title='PhoneBook'>
        <Form onSubmit={addContact}/>
        <p className={style.text}>Contacts</p>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts contacts={getVisibleContacts()} onDeleteContact={deleteContact}/>
      </Section>
    )
}


