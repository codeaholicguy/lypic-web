import {ActionTypes} from '../../core/constants'
import lypicService from '../../core/services/lypic'

export function getTrack(id) {
  return async dispatch => {
    dispatch({
      type: ActionTypes.RESET_TRACK
    })

    const track = await lypicService.getTrack(id)

    dispatch({
      type: ActionTypes.GET_TRACK,
      payload: track
    })
  }
}
