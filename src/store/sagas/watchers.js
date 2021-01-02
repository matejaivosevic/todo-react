import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authenticatioSaga';

import * as types from '../actions';

export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}