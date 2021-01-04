import * as types from './index'

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
}

export const logoutUserAction = () => {
  return {
    type: types.LOGOUT_USER
  }
}

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
}

export function fetchAuthenticatedUserSuccess (user) {
  return {
    type: types.FETCH_AUTHENTICATED_USER_SUCCESS,
    user
  }
}
