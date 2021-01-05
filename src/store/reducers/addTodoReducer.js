import * as types from '../actions'
import produce from 'immer'

export const initialTodoState = {
  toDoList: []
}

/* export default function addTodoReducer (state = initialTodoState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        toDoList: [...state.toDoList, { ...action.toDoItem }]
      }
    default:
      return state
  }
} */

export const login = (state = initialTodoState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.ADD_TODO:
        draft.toDoList = action.toDoItem
        break
      default:
        return state
    }
  })
