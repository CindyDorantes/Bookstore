/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookInfo = (props) => {
  const { book, id } = props;
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bookInfo">
      <h3 className="bookGenre">{book[0].category}</h3>
      <h1 className="bookTitle">{book[0].title}</h1>
      <h2 className="bookAuthor">{book[0].author}</h2>
      <div className="infoBtns">
        <button type="button">Comments</button>
        <button
          type="button"
          id={id}
          onClick={(e) => handleClick(e.target.id)}
        >
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = { book: PropTypes.array.isRequired, id: PropTypes.string.isRequired };

export default BookInfo;
