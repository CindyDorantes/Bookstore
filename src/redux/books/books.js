const ADD_BOOK = 'add_book';
const REMOVE_BOOK = 'remove_book';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK :
      return ;
    case REMOVE_BOOK:
      return;
    default :
    return state;
    }
};

export default bookReducer;