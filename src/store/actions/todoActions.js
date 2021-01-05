import * as types from './index'

export const addTodoAction = (payload) => {
  return {
    type: types.ADD_TODO,
    payload
  }
}
