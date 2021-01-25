import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  FETCH_DATA_START,
} from "../action";

const initialState = {
  jokes: {
    id: "",
    category: "",
    type: "",
    joke: "",
    setup: "",
    delivery: "",
  },
  fetch: false,
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetch: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        fetch: false,
        jokes: action.payload,
      };
    case FETCH_DATA_FAIL:
      return {};
    default:
      return state;
  }
};
