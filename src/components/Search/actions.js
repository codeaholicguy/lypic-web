import {ActionTypes} from '../../core/constants'
import lypicService from '../../core/services/lypic'

export function search(query) {
  return async dispatch => {
    dispatch({
      type: ActionTypes.RESET_SEARCH
    })

    dispatch({
      type: ActionTypes.NEW_SEARCH_KEYWORD,
      payload: query
    })

    const tracks = await lypicService.search(query)

    dispatch({
      type: ActionTypes.SEARCH,
      payload: tracks
    })
  }
}
