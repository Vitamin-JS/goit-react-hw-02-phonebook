import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    username: '',
    usernumber: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        usernumber: PropTypes.string.isRequired,
      }),
    ),
  };

  handleInputChange = event => {
    console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  newContactMatching = () => {
    const { username, usernumber } = this.state;
    const { contacts } = this.props;

    const isNewNameExist = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );

    const isNewNumberExist = contacts.reduce(
      (acc, contact) => [...acc, contacts.number],
      [],
    );

    if (
      isNewNameExist.includes(username) ||
      isNewNumberExist.includes(usernumber)
    ) {
      alert(`${username}: ${usernumber} есть в контактах `);
      return true; // проверить без true
    }

    if (username === '' || usernumber === '') {
      alert('Введите имя и телефон');
      return true;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // ===================== Вариант поиска введенного имени в существующих контактах ч\з find и this.props =======================================
  // ====================================================================
  // handleSubmit = evt => {
  //     evt.preventDefault();

  //     const { name, number } = this.state;

  //     if (this.checkContacts(this.props.contacts, name)) {
  //         alert(`${name} is already in contacts.`);
  //     } else {
  //         this.props.onSubmit({
  //             id: uuidv4(),
  //             name,
  //             number,
  //         });

  //         this.reset();
  //     }
  // };

  // checkContacts = (arr, target) => {
  //     return arr.find(({ name }) => name.toLowerCase() === target.toLowerCase());
  // };
  // ======================================================================

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <br></br>
          <input
            type="text"
            name="username" // имя как в state
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Enter a name"
            className={s.input}
          />
        </label>

        <br></br>

        <label className={s.label}>
          Number
          <br></br>
          <input
            type="number"
            name="usernumber" // имя как в state
            value={this.state.usernumber}
            onChange={this.handleInputChange}
            placeholder="Enter a number"
            className={s.input}
          />
        </label>
        <br></br>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
