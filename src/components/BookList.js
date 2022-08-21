/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

BookList.propTypes = { books: PropTypes.string.isRequired };

export default BookList;
