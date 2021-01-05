import * as types from '../actions'

export default function (state = [], action) {
  const response = action.response

  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response, isAuthenticated: false }
    case types.REGISTER_USER_ERROR:
      return { ...state, response, isAuthenticated: false }
    default:
      return state
  }
}
