import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import rootSaga from './sagas'

const configureStore = (initialState = {}, history) => {
  const composeEnhancers = compose
  const sagaMiddleware = createSagaMiddleware({})
  const middlewares = [sagaMiddleware, routerMiddleware(history)]
  const enhancers = [applyMiddleware(...middlewares)]

  return {
    ...createStore(rootReducer, composeEnhancers(...enhancers)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

export default configureStore
