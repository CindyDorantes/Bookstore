/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import InputBook from './InputBook';

const BookContainer = () => {
  const books = [{
    id: uuidv4(),
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    chapter: 'Chapter 17',
    progress: '64%',
  }];
  return (
    <div>
      <BookList books={books} />
      <InputBook />
    </div>
  );
};

// BookContainer.propTypes = { books: PropTypes.func.isRequired };

export default BookContainer;
