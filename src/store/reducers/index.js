import { combineReducers } from 'redux'
import login from './loginReducer'
import register from './registerReducer'
import { todoReducer } from './todoReducer'

const rootReducer = combineReducers({
  login, register, todoReducer
})

export default rootReducer
