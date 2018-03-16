import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import tracks from './tracks'
import track from './track'
import keyword from './keyword'

export default combineReducers({
  routing: routerReducer,
  tracks,
  track,
  keyword
})
