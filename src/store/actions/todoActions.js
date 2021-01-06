import * as Action from './index'

export const getTodos = payload => {
  return {
    type: Action.GET_TODOS,
    payload
  }
}

export const deleteTodo = payload => {
  return {
    type: Action.DELETE_TODO,
    payload
  }
}

export const handleComplete = payload => {
  return {
    type: Action.HANDLE_COMPLETE,
    payload
  }
}

export const editTodo = (id, payload) => {
  return {
    type: Action.EDIT_TODO,
    id: id,
    payload: payload
  }
}

export const addTodo = payload => {
  return {
    type: Action.ADD_TODO,
    payload
  }
}
