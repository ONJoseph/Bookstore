// Actions Section
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const defaultState = [];

// Reducer Section
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creators Section
export function checkStatus() {
  return { type: CHECK_STATUS };
}
