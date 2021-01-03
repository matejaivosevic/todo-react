import { takeLatest } from 'redux-saga/effects';
import { registerSaga } from './authenticatioSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
}