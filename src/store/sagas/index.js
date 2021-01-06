import { loginSaga, logoutSaga, registerSaga, fetchUser } from './authenticatioSaga'
import { addTodoSaga, deleteTodoSaga, editTodoSaga, getTodosSaga, handleCompleteSaga } from './todosSaga'

import * as types from '../actions'
import { all, takeLatest } from 'redux-saga/effects'

export default function * rootSaga () {
  yield all([
    takeLatest(types.REGISTER_USER, registerSaga),
    takeLatest(types.LOGIN_USER, loginSaga),
    takeLatest(types.FETCH_AUTHENTICATED_USER_REQUEST, fetchUser),
    takeLatest(types.LOGOUT_USER, logoutSaga),

    takeLatest(types.GET_TODOS, getTodosSaga),
    takeLatest(types.DELETE_TODO, deleteTodoSaga),
    takeLatest(types.EDIT_TODO, editTodoSaga),
    takeLatest(types.ADD_TODO, addTodoSaga),
    takeLatest(types.HANDLE_COMPLETE, handleCompleteSaga)
  ])
}
