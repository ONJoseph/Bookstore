import http from '../API-commons';

import {
  appsEndpoint, itemIdEndpoint, booksEndpoint,
} from '../modules/endpoints';

import storage from '../modules/localStorage';

storage.getLocal();

const createApp = () => http.post(appsEndpoint);

const createBook = (data) => http.post(`${appsEndpoint}/${storage.appId}${booksEndpoint}`, data);

const getBooks = () => http.get(`${appsEndpoint}/${storage.appId}${booksEndpoint}`);

const deleteBook = (bookId) => http.delete(
  `${appsEndpoint}/${storage.appId}${booksEndpoint}${itemIdEndpoint(bookId)}`,
);

const BookstoreService = {
  createApp,
  createBook,
  getBooks,
  deleteBook,
};

export default BookstoreService;
