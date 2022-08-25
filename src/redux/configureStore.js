import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/books';
import statusReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  statusReducer,
});

const store = configureStore({ reducer });

export default store;
