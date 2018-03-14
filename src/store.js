import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

export function configureStore({initialState, history}) {
  const router = routerMiddleware(history)
  const createStoreWithMiddleware = applyMiddleware(thunk, router)(createStore)

  return createStoreWithMiddleware(rootReducer, initialState)
}
