import './App.css';
import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react';
import { number } from 'prop-types';
// import Feedback from './components/FeedbackOptions';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameInputId = uuidv4();

  handleNameChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // getVisibleContacts=()=>{this.state.contacts};

  // deleteContact

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1 className="titleH1">Phonebook</h1>
          {/* <ContactForm ... /> */}

          <label className="formStyle">
            Name
            <br></br>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              className="inputNameStyle"
            />
          </label>
          <br></br>

          <label className="formStyle">
            Number
            <br></br>
            <input
              type="text"
              value={this.state.number}
              onChange={this.handleNameChange}
              className="inputNameStyle"
            />
          </label>
          <br></br>

          <button type="submit">Add contact</button>

          <h2 className="titleH2">Contacts</h2>
          <ContactList contacts={this.state.contacts} />

          {/* contacts={this.getVisibleContacts()}  свойства ContactLis
          onDelete={this.deleteContact} */}
          {/* <Filter ... />*/}
        </form>
      </div>
    );
  }
}

App.propTypes = {
  // options: PropTypes.objectOf(PropTypes.number).isRequired,
  // getItemName: PropTypes.func,
  // onLeaveFeedback: PropTypes.func,
};

export default App;
