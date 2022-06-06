// Actions Section
const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';
const defaultState = [];

// Reducer Section
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REM_BOOK:
      return [
        state.filter((item) => item !== action.payload),
      ];
    default:
      return state;
  }
}

// Action Creators Section
export function addBook(obj) {
  return { type: ADD_BOOK, payload: obj };
}

export function removeBook(obj) {
  return { type: ADD_BOOK, payload: obj };
}
