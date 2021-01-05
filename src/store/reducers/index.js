import { combineReducers } from 'redux'
import { login } from './loginReducer'
import register from './registerReducer'
import { connectRouter } from 'connected-react-router'
import history from '../../utils/history'

const rootReducer = combineReducers({
  login, register, router: connectRouter(history)
})

export default rootReducer
