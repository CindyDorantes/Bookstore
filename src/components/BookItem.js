/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import BookGraph from './BookGraph';
import BookProgress from './BookProgress';

const BookItem = (props) => {
  console.log('bookItem props: ', props);
  const { book, id } = props;
  console.log('book:', book, ' id: ', id);
  return (
    <div className="bookItem">
      <BookInfo book={book} id={id} />
      <BookGraph book={book} id={id} />
      <BookProgress book={book} id={id} />
    </div>
  );
};

BookItem.propTypes = { book: PropTypes.array.isRequired, id: PropTypes.string.isRequired };

export default BookItem;
