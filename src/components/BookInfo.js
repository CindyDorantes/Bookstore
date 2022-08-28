/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import style from './Styles/BookInfo.module.css';

const BookInfo = (props) => {
  const { book, id } = props;
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className={style.bookInfo}>
      <h3 className={style.bookGenre}>{book[0].category}</h3>
      <h1 className={style.bookTitle}>{book[0].title}</h1>
      <h2 className={style.bookAuthor}>{book[0].author}</h2>
      <div className={style.infoBtns}>
        <button type="button" className={style.button}>Comments</button>
        <div className={style.line} />
        <button
          type="button"
          id={id}
          onClick={(e) => handleClick(e.target.id)}
          className={style.button}
        >
          Remove
        </button>
        <div className={style.line} />
        <button type="button" className={style.button}>Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = { book: PropTypes.array.isRequired, id: PropTypes.string.isRequired };

export default BookInfo;
