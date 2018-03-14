import React from 'react'
import {Route} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Track from './components/Track'
import NotFound from './components/NotFound'

export default function createRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/tracks/:id" component={Track} />
      <Route path="*" component={NotFound} />
    </Route>
  )
}
