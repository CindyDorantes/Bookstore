/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookInfo = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bookInfo">
      <h3 className="bookGenre">{book.genre}</h3>
      <h1 className="bookTitle">{book.title}</h1>
      <h2 className="bookAuthor">{book.author}</h2>
      <div className="infoBtns">
        <button type="button">Comments</button>
        <button type="button" id={book.id} onClick={(e) => handleClick(e.target.id)}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = { book: PropTypes.object.isRequired };

export default BookInfo;
