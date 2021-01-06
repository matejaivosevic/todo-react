import { createSelector } from 'reselect'
import { initialState } from './reducers/loginReducer'
import { initialTodoState } from './reducers/todoReducer'

const selectApp = state => initialState
const selectTodoApp = state => state.app || initialTodoState

const makeSelectToken = () =>
  createSelector(
    selectApp,
    substate => substate.token
  )

const toDoList = () =>
  createSelector(
    selectTodoApp,
    substate => substate.todos
  )

const makeSelectIsAuthenticated = () =>
  createSelector(
    selectApp,
    substate => !!substate.token
  )

export { makeSelectToken, toDoList, makeSelectIsAuthenticated }
