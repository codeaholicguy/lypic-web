import {createStore, applyMiddleware} from 'redux'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'

import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

const router = routerMiddleware(browserHistory)

const createStoreWithMiddleware = applyMiddleware(thunk, router)(createStore)

export function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
