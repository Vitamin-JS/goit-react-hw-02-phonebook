import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459- 12 - 56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    username: '',
    usernumber: '',
  };

  addContact = (username, usernumber) => {
    const contact = {
      id: uuidv4(),
      name: username,
      number: usernumber,
    };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    console.log(this.state);
  };

  handleInputChange = event => {
    console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }; // скопировал в Форм - удалить

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }; // скопировал в Форм - удалить

  // getVisibleContacts=()=>{this.state.contacts};

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1 className="titleH1">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />

        <h2 className="titleH2">Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />

        {/* contacts={this.getVisibleContacts()}  свойства ContactLis
        }
        {/* <Filter ... />*/}
      </>
    );
  }
}

export default App;
