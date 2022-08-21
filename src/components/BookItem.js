import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import BookGraph from './BookGraph';
import BookProgress from './BookProgress';

const BookItem = (props) => {
  const { book } = props;
  return (
    <div className="bookItem">
      <BookInfo book={book} />
      <BookGraph book={book} />
      <BookProgress book={book} />
    </div>
  );
};

BookItem.propTypes = { book: PropTypes.string.isRequired };

export default BookItem;
