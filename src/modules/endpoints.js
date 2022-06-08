const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appsEndpoint = '/apps';
const appIdEndpoint = (id) => `/${id}`;
const booksEndpoint = '/books';
const itemIdEndpoint = (id) => `/${id}`;

export {
  baseURL, appsEndpoint, appIdEndpoint, booksEndpoint, itemIdEndpoint,
};
