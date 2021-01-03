import * as types from './index'

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER
  }
}

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
}
