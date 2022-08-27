// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
const GET_BOOK = 'get_book';
const ADD_BOOK = 'add_book';
const REMOVE_BOOK = 'remove_book';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yCu0gedfifE2iJXdHCE5/books';
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK: {
      console.log('get book');
      return action.payload;
    }
    case ADD_BOOK: {
      return action.payload;
    }
    case REMOVE_BOOK: {
      return action.payload;
    }
    default:
      return state;
  }
};

const getBook = () => (dispatch) => fetch(url)
  .then(async (response) => {
    const books = await response.json();
    return books;
  })
  .then((books) => {
    dispatch({ type: GET_BOOK, payload: books });
  });

function addBook(book) {
  return async function addAPI(dispatch, getState) {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    dispatch(getBook());
    const books = getState().bookReducer;
    dispatch({ type: ADD_BOOK, payload: books });
  };
}

function removeBook(id) {
  return async function removeAPI(dispatch, getState) {
    console.log('removeBook', id);
    const urlRemove = url.concat('/', id);
    await fetch(urlRemove, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log('here goes the dispatch');
    dispatch(getBook());
    const books = getState().bookReducer;
    dispatch({ type: REMOVE_BOOK, payload: books });
  };
}

export { getBook, addBook, removeBook };
export default bookReducer;
