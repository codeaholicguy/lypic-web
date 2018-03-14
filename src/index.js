// eslint-disable-next-line
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import {configureStore} from './store'
import createRoutes from './routes'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const store = configureStore({history})
const routes = createRoutes()

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

renderApp()
registerServiceWorker()
