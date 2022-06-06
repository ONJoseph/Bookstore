// Actions Section
const STATUS_CHECKED = 'STATUS_CHECKED';
const defaultState = [];

// Reducer Section
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creators Section
export function checkStatus() {
  return { type: STATUS_CHECKED };
}
