import produce from 'immer'
import * as types from '../actions'
import { getLocalStorageItem } from '../../utils/localStorage'

export const initialState = {
  token: getLocalStorageItem('jwt-token') || null,
  user: null
}

/* export default function (state = initialState, action) {
  const response = action.response

  switch (action.type) {
    case types.FETCH_AUTHENTICATED_USER_SUCCESS:
      return { ...state, response }
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response }
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, response }
    case types.LOGIN_USER_ERROR:
      return { ...state, response }
    default:
      return state
  }
} */

export const login = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_AUTHENTICATED_USER_SUCCESS:
        draft.user = action.user
        break
      case types.LOGIN_USER_SUCCESS:
        draft.user = action.user
        draft.token = action.token
        break
      case types.LOGOUT_USER_SUCCESS:
        draft.user = null
        draft.token = null
        break
      case types.LOGIN_USER_ERROR:
        draft.user = null
        draft.token = null
        break
      default:
        return state
    }
  })
