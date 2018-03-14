import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
