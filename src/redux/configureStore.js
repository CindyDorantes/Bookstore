import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  statusReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});

export default store;
