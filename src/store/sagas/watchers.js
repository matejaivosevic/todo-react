import { takeLatest } from 'redux-saga/effects'
import { loginSaga, logoutSaga, registerSaga, fetchUser } from './authenticatioSaga'

import * as types from '../actions'
import { addTodoSaga } from './todosSaga'

export default function * watchUserAuthentication () {
  yield takeLatest(types.LOGIN_USER, loginSaga)
  yield takeLatest(types.REGISTER_USER, registerSaga)
  yield takeLatest(types.LOGOUT_USER, logoutSaga)
  yield takeLatest(types.FETCH_AUTHENTICATED_USER_REQUEST, fetchUser)
  yield takeLatest(types.ADD_TODO, addTodoSaga)
}
