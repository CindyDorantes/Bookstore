/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books } = props;
  const indexBooks = Object.keys(books);
  const infoBooks = Object.values(books);

  return (
    <div>
      {indexBooks.map((id, i) => (
        <BookItem book={infoBooks[i]} id={id} key={id} />
      ))}
    </div>
  );
};

BookList.propTypes = { books: PropTypes.object.isRequired };

export default BookList;
