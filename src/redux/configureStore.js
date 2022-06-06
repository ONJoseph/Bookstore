//Bookstore
import { configureStore, combineReducers } from 'redux';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  book: booksReducer,
  categories: categoriesReducer,
});

const store = (initialState) => configureStore(reducer, initialState);
export default store;
