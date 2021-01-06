import * as types from '../actions'
import { getLocalStorageItem } from '../../utils/localStorage'

export const initialState = {
  token: getLocalStorageItem('jwt-token') || null,
  user: null
}

export default function login (state = initialState, action) {
  const response = action.response

  switch (action.type) {
    case types.FETCH_AUTHENTICATED_USER_SUCCESS:
      return { ...state, response, isAuthenticated: true, token: response.token || initialState.token, auth: true }
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response, isAuthenticated: true, token: response.token || initialState.token, auth: true }
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, response, isAuthenticated: false, token: null }
    case types.LOGIN_USER_ERROR:
      return { ...state, response, isAuthenticated: false, token: null }
    default:
      return state
  }
}
