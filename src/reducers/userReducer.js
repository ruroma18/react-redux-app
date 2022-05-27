import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USERS_REQUEST: {
      return {
        ...initialState,
      }
    }
    case ACTION_TYPES.GET_USERS_SUCCES: {
      return {
        ...state,
        users: action.payload.values,
        isLoading: true
      }
    }
    case ACTION_TYPES.GET_USERS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      }
    }
    default:
      return state;
  }
}