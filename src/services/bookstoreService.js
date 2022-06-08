import http from '../API-commons';

import {
  appsEndpoint, itemIdEndpoint, booksEndpoint,
} from '../modules/endpoints';

import storage from '../modules/localStorage';

const createApp = () => http.post(appsEndpoint);

storage.getLocal(createApp);

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
