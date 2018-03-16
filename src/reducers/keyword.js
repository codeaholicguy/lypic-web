import {ActionTypes} from '../core/constants'

const initialState = null

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESET_SEARCH:
      return initialState
    case ActionTypes.NEW_SEARCH_KEYWORD:
      return action.payload
    default:
      return state
  }
}
