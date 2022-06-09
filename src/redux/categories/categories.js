// Actions Section
const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

// Reducer Section
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creators Section
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
