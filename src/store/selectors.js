import { createSelector } from 'reselect'
import { initialState } from './reducers/loginReducer'

const selectApp = state => state.app || initialState

const makeSelectToken = () =>
  createSelector(
    selectApp,
    substate => substate.token
  )

export { makeSelectToken }
