import { put, call } from 'redux-saga/effects'
import AuthService from '../../services/AuthService'
import { fetchAuthenticatedUserSuccess } from '../actions/authenticationActions'
import { push } from 'connected-react-router'

import * as types from '../actions'

export function * loginSaga (payload) {
  try {
    const response = yield call(AuthService.loginUser, payload)
    yield put({ type: types.LOGIN_USER_SUCCESS, response })
    yield put(push('/me'))
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

export function * logoutSaga (payload) {
  try {
    const response = yield call(AuthService.logout, payload)
    yield put({ type: types.LOGOUT_USER_SUCCESS, response })
  } catch (error) {
    yield put({ type: types.LOGOUT_USER_ERROR, error })
  }
}

export function * registerSaga (payload) {
  try {
    const response = yield call(AuthService.registerUser, payload)
    yield put({ type: types.REGISTER_USER_SUCCESS, response })
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error })
  }
}

export function * fetchUser () {
  try {
    const response = yield call(AuthService.me)
    yield put(fetchAuthenticatedUserSuccess(response))
  } catch (error) {
    yield put({ type: types.FETCH_AUTHENTICATED_USER_ERROR, error })
  }
}
