// Bookstore
import { combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import { applyMiddleware } from 'redux';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  book: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
