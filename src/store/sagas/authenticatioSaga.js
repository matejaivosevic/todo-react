import { put, call } from 'redux-saga/effects';
import AuthService from '../../services/AuthService';

import * as types from '../actions'

export function* loginSaga(payload) {
  try {
    const response = yield call(AuthService.loginUser, payload);
    yield [
        put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}