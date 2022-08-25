// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'add_book';
const REMOVE_BOOK = 'remove_book';
const initialState = [
  {
    id: uuidv4(),
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    chapter: 'Chapter 17',
    progress: '64%',
  },
  {
    id: uuidv4(),
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    chapter: 'Chapter 3: "A Lesson Learned"',
    progress: '8%',
  },
  {
    id: uuidv4(),
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Thomas Piketty',
    chapter: 'Introduction',
    progress: '0%',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      const { index } = action.index;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];
    }
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (index) => ({
  type: REMOVE_BOOK,
  index,
});

export { addBook, removeBook };
export default bookReducer;
