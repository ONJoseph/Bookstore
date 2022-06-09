// Bookstore
import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';

import thunk from 'redux-thunk';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  book: booksReducer,
  categories: categoriesReducer,
});

const bookstorestore = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default bookstorestore;
