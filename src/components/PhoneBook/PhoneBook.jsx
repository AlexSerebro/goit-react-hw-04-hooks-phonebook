import style from './PhoneBook.module.css'
import { Component } from 'react'
import { Section } from '../Section/';
import  Form  from '../Form';
import { Contacts } from './Contacts'
import { Filter } from "../Filter";
import shortid from "shortid";

// const CONTACT_LIST = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];


export class PhoneBook extends Component{
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    // console.log(parseContacts);
    if (parseContacts) {
      this.setState({contacts: parseContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      // console.log('apdate contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = (name, number) => {
    if (
      this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`You have already had ${name} in your contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name: name, 
      number: number,
     };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

    changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

    getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };

    deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };
  
  render() {
    const { filter } = this.state;
    const vizibleContacts = this.getVisibleContacts();

    return (
      <Section title='PhoneBook'>
        <Form onSubmit={this.addContact}/>
        <p className={style.text}>Contacts</p>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={vizibleContacts} onDeleteContact={this.deleteContact}/>
      </Section>
    )}
}

