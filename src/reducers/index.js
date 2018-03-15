import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import tracks from './tracks'
import track from './track'

export default combineReducers({
  routing: routerReducer,
  tracks,
  track
})
