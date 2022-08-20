/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

BookList.propTypes = { books: PropTypes.string.isRequired };

export default BookList;
