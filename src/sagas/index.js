import { takeEvery, put } from 'redux-saga/effects'
import ACTION_TYPES from '../actions/actionTypes'
import * as actionCreator from '../actions'
import * as API from '../api'

function* getUsersSaga() {
  try {
    const response = yield API.getUser()
    const { data: {data : users }
  } = response;
  yield put(actionCreator.getUserSucces(users))
} catch (error) {
  yield put(actionCreator.getUserError(error.response.data.error))
}
}

export default function* rootSaga() {
  yield takeEvery(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga)
}