import './App.css';

import React, { Component } from 'react';
// import Feedback from './components/FeedbackOptions';

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

  render() {
    return (
      <div>
        <h1 className="titleH1">Phonebook</h1>
        {/* <ContactForm ... /> */}

        <h2 className="titleH2">Contacts</h2>
        {/* <Filter ... />
        <ContactList ... /> */}
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