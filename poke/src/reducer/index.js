import { FETCH_DATA, FETCH_SUCCESSFUL, ERROR } from "../action";
const initialState = {
  pokemon: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESSFUL:
      return {
        ...state,
        pokemon: action.payload,
        isLoading: false,
        error: "",
      };
    case ERROR:
      return {
        ...state,
        pokemon: "",
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
