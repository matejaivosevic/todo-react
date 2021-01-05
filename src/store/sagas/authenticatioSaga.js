import { put, call } from 'redux-saga/effects';
import AuthService from '../../services/AuthService';
import * as types from '../actions'

export function* registerSaga(payload) {
  try {
    const response = yield call(AuthService.registerUser, payload);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}