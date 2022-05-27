import ACTION_TYPES from "./actionTypes";

export const getUserRequest = () => {
  return {
    type: ACTION_TYPES.GET_USERS_REQUEST,
  }
}

export const getUserSucces = (values) => {
  return {
    type: ACTION_TYPES.GET_USERS_SUCCES,
    payload: { values }
  }
}

export const getUserError = (error) => {
  return {
    type: ACTION_TYPES.GET_USERS_ERROR,
    payload: { error }
  }
}