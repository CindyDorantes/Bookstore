/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import InputBook from './InputBook';

class BookContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          id: uuidv4(),
          genre: 'Action',
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
          chapter: 'Chapter 17',
          progress: '64%',
        },
        // {
        //   id: uuidv4(),
        //   genre: 'Science Fiction',
        //   title: 'Dune',
        //   author: 'Frank Herbert',
        //   chapter: 'Chapter 3: "A Lesson Learned"',
        //   progress: '8%',
        // },
        // {
        //   id: uuidv4(),
        //   genre: 'Economy',
        //   title: 'Capital in the Twenty-First Century',
        //   author: 'Thomas Piketty',
        //   chapter: 'Introduction',
        //   progress: '0%',
        // },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <BookList books={books} />
        <InputBook />
      </div>
    );
  }
}

// BookContainer.propTypes = { books: PropTypes.func.isRequired };

export default BookContainer;
