import { put, call } from 'redux-saga/effects'
import AuthService from '../../services/AuthService'
import * as types from '../actions'

export function * addTodoSaga (payload) {
  try {
    const response = yield call(AuthService.registerUser, payload)
    yield [
      put({ type: types.ADD_TODO, response })
    ]
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error })
  }
}
