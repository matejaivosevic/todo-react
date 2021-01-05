import { takeLatest } from 'redux-saga/effects';
import * as types from '../actions';
import { addTodoSaga } from './todosSaga';


export default function* watchTodoActions() {
  yield takeLatest(types.ADD_TODO, addTodoSaga);
}