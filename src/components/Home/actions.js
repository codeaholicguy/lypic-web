import {ActionTypes} from '../../core/constants'
import lypicService from '../../core/services/lypic'

export function search(query) {
  return async dispatch => {
    dispatch({
      type: ActionTypes.RESET_SEARCH
    })

    const tracks = await lypicService.search(query)

    dispatch({
      type: ActionTypes.SEARCH,
      payload: tracks
    })
  }
}
