const ADD_BOOK = 'add_book';
const REMOVE_BOOK = 'remove_book';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK :
      return {...state, book};
    case REMOVE_BOOK:
      return 'filter state';
    default :
      return state;
    }
};

const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book
  }
};

const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    payload: book
  }
};

export { addBook, removeBook };
export default bookReducer;