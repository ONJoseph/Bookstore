import http from '../API-commons';

import {
  appsEndpoint, appIdEndpoint, itemIdEndpoint, booksEndpoint,
} from '../modules/endpoints';

const createApp = () => http.post(appsEndpoint);

const createBook = (id) => http.post(appsEndpoint + appIdEndpoint(id) + booksEndpoint);

const getBooks = (id) => http.get(appsEndpoint + appIdEndpoint(id) + booksEndpoint);

const deleteBook = (appId, bookId) => http.delete(
  appsEndpoint + appIdEndpoint(appId) + booksEndpoint + itemIdEndpoint(bookId),
);

const BookstoreService = {
  createApp,
  createBook,
  getBooks,
  deleteBook,
};

export default BookstoreService;
