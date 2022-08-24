const ADD_BOOK = 'add_book';
const REMOVE_BOOK = 'remove_book';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      const book = action.book;
      return [...state, book];
    case REMOVE_BOOK:
      const index = action.index;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length)
      ];
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (index) => ({
  type: REMOVE_BOOK,
  index,
});

export { addBook, removeBook };
export default bookReducer;
