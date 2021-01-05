import * as types from '../actions';

const initialState = {
  toDoList: []
};

export default function addTodoReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem
        }
      ];
      return {
        ...state,
        toDoList: newToDoList
      };
    default:
      return state;
  }
}