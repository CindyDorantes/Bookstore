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
    <input
      type="text"
      placeholder="Author"
      className="inputAuthor"
    />
    <button type="submit">ADD BOOK</button>
  </form>
);

// BookList.propTypes = { books: PropTypes.string.isRequired };

export default InputBook;
