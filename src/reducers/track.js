import {ActionTypes} from '../core/constants'

const initialState = null

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESET_TRACK:
      return initialState
    case ActionTypes.GET_TRACK:
      return action.payload
    default:
      return state
  }
}
