import React from 'react';
import PropTypes from 'prop-types';

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
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
