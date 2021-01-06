import TodoService from '../../services/TodoService'
import { call, put } from 'redux-saga/effects'

import * as types from '../actions'

export function * getTodosSaga (payload) {
  try {
    const response = yield call(TodoService.getUserTodos, payload)
    yield put({ type: types.GET_TODOS_SUCCESS, response })
  } catch (error) {
    yield put({ type: types.GET_TODOS_ERROR, error })
  }
}

export function * editTodoSaga (payload) {
  try {
    console.log(payload)
    const response = yield call(TodoService.editTodo, payload.id, payload.payload)
    yield put({ type: types.EDIT_TODO_SUCCESS, response })
  } catch (error) {
    yield put({ type: types.EDIT_TODO_ERROR })
  }
}

export function * handleCompleteSaga (payload) {
  try {
    const response = yield call(TodoService.handleComplete, payload.payload)
    yield put({ type: types.HANDLE_COMPLETE_SUCCESS, response })
  } catch (error) {
    yield put({ type: types.HANDLE_COMPLETE_ERROR })
  }
}

export function * deleteTodoSaga (payload) {
  try {
    const response = yield call(TodoService.deleteTodo, payload.payload)
    yield put({ type: types.DELETE_TODO_SUCCESS, response })
  } catch (error) {
    yield put({ type: types.DELETE_TODO_ERROR, error })
  }
}

export function * addTodoSaga (payload) {
  try {
    const response = yield call(TodoService.addTodo, payload.payload)
    yield put({ type: types.ADD_TODO_SUCCESS, response })
  } catch (error) {
    yield put({ type: types.ADD_TODO_ERROR, error })
  }
}
