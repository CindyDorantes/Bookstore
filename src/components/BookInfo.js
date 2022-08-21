import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = (props) => {
  const { book } = props;
  return (
    <div className="bookInfo">
      <h3 className="bookGenre">{book.genre}</h3>
      <h1 className="bookTitle">{book.title}</h1>
      <h2 className="bookAuthor">{book.author}</h2>
      <div className="infoBtns">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = { book: PropTypes.string.isRequired };

export default BookInfo;
