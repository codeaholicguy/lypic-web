import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Track from './components/Track'
import NotFound from './components/NotFound'

export default function createRoutes() {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tracks/:id" component={Track} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  )
}
