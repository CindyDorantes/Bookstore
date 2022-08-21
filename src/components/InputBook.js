import React from 'react';
// import PropTypes from 'prop-types';

const InputBook = () => (
  <form>
    <p>ADD NEW BOOK</p>
    <input
      type="text"
      placeholder="Book title"
      className="inputTitle"
    />
    <select>
      <option value="Action">Action</option>
      <option value="ScienceFiction">Science Fiction</option>
      <option value="Economy">Economy</option>
    </select>
    <button type="submit">ADD BOOK</button>
  </form>
);

// BookList.propTypes = { books: PropTypes.string.isRequired };

export default InputBook;
