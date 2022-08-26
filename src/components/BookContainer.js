/* eslint-disable react/prefer-stateless-function */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBook } from '../redux/books/books';
import BookList from './BookList';
import InputBook from './InputBook';

const BookContainer = () => {
  const books = useSelector((store) => store.bookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, []);

  return (
    <div>
      <BookList books={books} />
      <InputBook />
    </div>
  );
};

// BookContainer.propTypes = { books: PropTypes.func.isRequired };

export default BookContainer;
