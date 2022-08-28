import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, getBook } from '../redux/books/books';
import styles from './Styles/InputBook.module.css';
// import PropTypes from 'prop-types';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [setTitle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBook(book));
  };

  return (
    <div className={styles.inputBook}>
      <span className={styles.line} />
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <p className={styles.title}>ADD NEW BOOK</p>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.inputTitle}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.inputTitle}
          required
        />
        <button type="submit" className={styles.button}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

// BookList.propTypes = { books: PropTypes.string.isRequired };

export default InputBook;
