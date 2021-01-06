import { getLocalStorageItem } from '../../utils/localStorage'
import * as types from '../actions'

export const initialTodoState = {
  token: getLocalStorageItem('jwt-token') || null,
  todos: []
}

export const todoReducer = (state = initialTodoState, action) => {
  const payload = action

  switch (action.type) {
    case types.GET_TODOS_SUCCESS: {
      return { ...state, todos: payload.response.data, isAuthenticated: true }
    }
    case types.GET_TODOS_ERROR: {
      return { ...state, isAuthenticated: true }
    }
    case types.DELETE_TODO_SUCCESS: {
      const newTodos = state.todos.filter(todo => todo.id.toString() !== payload.response.data)
      return { ...state, todos: newTodos, isAuthenticated: true }
    }
    case types.DELETE_TODO_ERROR: {
      return { ...state }
    }
    case types.EDIT_TODO_SUCCESS: {
      return { ...state, isAuthenticated: true, todos: payload.response.data }
    }
    case types.EDIT_TODO_ERROR: {
      return { ...state, isAuthenticated: true }
    }
    case types.ADD_TODO_SUCCESS: {
      return { ...state, isAuthenticated: true, todos: payload.response.data }
    }
    case types.HANDLE_COMPLETE_SUCCESS: {
      return { ...state, todos: payload.response.data, isAuthenticated: true }
    }
    case types.HANDLE_COMPLETE_ERROR: {
      return { ...state, isAuthenticated: true }
    }
    case types.ADD_TODO_ERROR: {
      return { ...state, isAuthenticated: true }
    }
    default:
      return state
  }
}
