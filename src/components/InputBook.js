import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
// import PropTypes from 'prop-types';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>ADD NEW BOOK</p>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="inputTitle"
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="inputAuthor"
        required
      />
      <button type="submit">
        ADD BOOK
      </button>
    </form>
  );
};

// BookList.propTypes = { books: PropTypes.string.isRequired };

export default InputBook;
