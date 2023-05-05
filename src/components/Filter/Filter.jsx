import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Find contacts by name"
        placeholder="search"
        required
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
