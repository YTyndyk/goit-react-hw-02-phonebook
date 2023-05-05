import { Component } from 'react';
import ContactsList from './ContactsList';
import contacts from '../../src/contacts.json';
import Form from './ContactsForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts,
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = data => {
    console.log(data);
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
