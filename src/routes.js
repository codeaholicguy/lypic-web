import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import TrackList from './components/TrackList'
import Track from './components/Track'
import NotFound from './components/NotFound'

export default function createRoutes() {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={TrackList} />
          <Route path="/tracks/:id" component={Track} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  )
}
