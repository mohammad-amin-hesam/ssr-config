import { FETCH_USERS } from "../actions";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, items: action.payload.data };

    default:
      return state;
  }
};
