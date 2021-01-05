import { fork } from 'redux-saga/effects';
import watchTodoActions from './todoWatchers';
import watchUserAuthentication from './watchers';

export default function* startForman() {
  yield fork(watchUserAuthentication);
  yield fork(watchTodoActions);
}