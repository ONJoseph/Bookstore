// Actions Section
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const defaultState = [
  {
    id: '1',
    author: 'Joseph',
    title: 'How to Achieve Mastery in Software Development',
    category: 'Software',
  },
  {
    id: '2',
    author: 'John Smith',
    title: 'The Great Gatsby',
    category: 'Fiction',
  },
  {
    id: '3',
    author: 'Akasha',
    title: 'The Unbearable Lightness of Being',
    category: 'Lifestyle',
  },
];

// Reducer Section
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

// Action Creators Section
export function addBook(obj) {
  return { type: ADD_BOOK, payload: obj };
}

export function removeBook(obj) {
  return { type: REMOVE_BOOK, payload: obj };
}
