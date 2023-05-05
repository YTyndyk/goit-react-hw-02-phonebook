import React from 'react';
import css from './ContactsList.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className="contactsList__item" key={id}>
        <p>{name}: </p>
        <p>{number}</p>
        <button
          onClick={() => onDeleteContact(id)}
          className="contactsBtn"
          type="button"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
