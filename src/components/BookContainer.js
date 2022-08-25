/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import InputBook from './InputBook';

const BookContainer = () => {
  const books = useSelector((store) => store.bookReducer);
  return (
    <div>
      <BookList books={books} />
      <InputBook />
    </div>
  );
};

// BookContainer.propTypes = { books: PropTypes.func.isRequired };

export default BookContainer;
